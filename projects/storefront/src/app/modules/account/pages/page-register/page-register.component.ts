import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApi } from '../../../../api/base';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { mustMatchValidator } from '../../../../functions/validators/must-match';
import { mobilenumberValidation } from 'projects/storefront/src/app/functions/validators/mobileValidation';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'projects/storefront/src/app/services/auth.service';

@Component({
    selector: 'app-page-register',
    templateUrl: './page-register.component.html',
})
export class PageRegisterComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    registerForm: FormGroup;
    apiCallInprogress = false;
    showOtpInput: boolean;
    config = {
        allowNumbersOnly: true,
        length: 4,
        isPasswordInput: false,
        disableAutoFocus: false,
        placeholder: '',
        inputStyles: {
          width: '30px',
          height: '30px'
        }
      };
    enteredOtp='';
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private account: AccountApi,
        private toastr: ToastrService,

    ) { }

    ngOnInit(): void {
        
        this.registerForm = this.fb.group({
			name: [''],
            phone: ['', [Validators.required]],
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    generateOtp(): void {
        this.registerForm.markAllAsTouched();

        if (this.registerForm.invalid) {
            return;
        }

        this.apiCallInprogress = true;

        this.account.generateOtp(
			+this.registerForm.value.phone,
        ).pipe(
            finalize(() => this.apiCallInprogress = false),
            takeUntil(this.destroy$),
        ).subscribe(
            (res) => {
                this.toastr.success(res);
                this.showOtpInput=true;

            },
            error => {
                this.toastr.error(`${error.error.errors[0].message}`);

            },
        );
    }

    verifyOtp(){

        if (this.enteredOtp.length!==4) {
            return;
        }
        this.apiCallInprogress = true;
 
        this.account.verifyOtp(
            +this.registerForm.value.phone,
            +this.enteredOtp
        ).pipe(
            finalize(() => this.apiCallInprogress = false),
            takeUntil(this.destroy$),
        ).subscribe(
            (res) => {
                const userFromApi = {
                    email: '',
                    firstName: '',
                    lastName: '',
                    phone: this.registerForm.value.phone,
                    address: '',
                    state: '',
                    zipcode: '',
                    country: '',
                    avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
                    user_id:res.user.id,
                    is_seller:res.user.is_seller,
                    token:res.token,
                    user_type:res.user && res.user.user_type
                };
                this.account.setUser(userFromApi)
                this.toastr.success('Account Created'); 

                if(sessionStorage.getItem('isCart')){
                    this.router.navigate(['/shop/cart'])
                }else{
                    this.router.navigateByUrl('/account/profile')
                }
                       
            },
            error => {

                this.toastr.error(`${error.error.errors[0].message}`);

},
        );
    }

    public onOtpChange(otp): void {
        this.enteredOtp = otp;
      }

      fieldChange(){
          this.showOtpInput=false;
      }

   
}
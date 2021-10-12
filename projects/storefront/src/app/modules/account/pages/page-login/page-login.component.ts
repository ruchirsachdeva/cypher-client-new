import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApi } from '../../../../api/base';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { mustMatchValidator } from '../../../../functions/validators/must-match';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'projects/storefront/src/app/services/auth.service';

@Component({
    selector: 'app-page-login',
    templateUrl: './page-login.component.html',
})
export class PageLoginComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    loginForm: FormGroup;
    loginInProgress = false;
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
        this.loginForm = this.fb.group({
            phone: ['', [Validators.required]],
        });

        
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    login(){

        if (this.enteredOtp.length!==4) {
            return;
        }
        this.loginInProgress = true;
 
        this.account.verifyOtp(
            +this.loginForm.value.phone,
            +this.enteredOtp
        ).pipe(
            finalize(() => this.loginInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(
            (res) => {
                this.toastr.success('Login Successful');
                const userFromApi = {
                    email: res.email,
                    firstName: res.first_name,
                    lastName: res.last_name,
                    phone: this.loginForm.value.phone,
                    address: res.address,
                    state: res.state,
                    zipcode: res.zipCode,
                    country: res.country,
                    avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
                    user_id:res.user.id,
                    token:res.token,
                    is_seller:res.user.is_seller,
                    buyer_id:res.id,
                    user_type:res.user && res.user.user_type
                };
                this.account.setUser(userFromApi);
                if(sessionStorage.getItem('isCart')){
                    this.router.navigate(['/shop/cart'])
                }else{
                    this.router.navigateByUrl('/account/profile')
                }
        },
            error => {
                this.toastr.error(`${error.error.errors[0].message || error.error.errors[0]}`);
},
        );
    }

    generateOtp(): void {
        this.loginForm.markAllAsTouched();

        if (this.loginForm.invalid) {
            return;
        }

        this.loginInProgress = true;

        this.account.generateOtpLogin(
			+this.loginForm.value.phone,
        ).pipe(
            finalize(() => this.loginInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(
            (otp) => {
                this.toastr.success(otp);
                this.showOtpInput=true;
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


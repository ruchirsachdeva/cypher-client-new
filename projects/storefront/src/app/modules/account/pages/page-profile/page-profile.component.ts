import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountApi } from '../../../../api/base';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
})
export class PageProfileComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();
    @Input() notshow
    form: FormGroup;
    saveInProgress = false;
    showSaveButton=true;
    public states = [ "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]
    profileWillUpdate: boolean=false;
    constructor(
        private account: AccountApi,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private translate: TranslateService,
		private router: Router,
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            first_name: [this.account.user.firstName, [Validators.required]],
            last_name: [this.account.user.lastName, [Validators.required]],
			address: [this.account.user.address],
			state: [this.account.user.state, [Validators.required]],
			zipCode: [this.account.user.zipcode, [Validators.required]],
			country: [this.account.user.country?this.account.user.country:'India', [Validators.required]],
            email: [this.account.user.email, [Validators.required, Validators.email]],
            phone_number: [String(this.account.user.phone), [Validators.required]],
        });
        if(this.form.value.first_name){
            this.form.disable();
            this.showSaveButton=false;
        }
        if(this.form.value.first_name){
            this.profileWillUpdate=true;
        }
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
	logout(): void {
        this.account.signOut().pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.toastr.success(this.translate.instant('Logged Out Successfully'));
            this.router.navigateByUrl('/account/login').then();
        });
    }

    save(): void {
        this.form.markAllAsTouched();

        if (this.saveInProgress || this.form.invalid){
            return;
        }

        this.saveInProgress = true;
        if(this.profileWillUpdate){
            this.profileSaved('update');
        }else{
              this.profileSaved('add');
        }
       
    }

    setData(res){ 
        const userFromApi = {
            email: res.email,
            firstName: res.first_name,
            lastName: res.last_name,
            phone: res.phone_number,
            address: res.address,
            state: res.state,
            zipcode: res.zipCode,
            country: res.country,
            avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
            user_id:res.user_id,
            is_seller:JSON.parse(localStorage.getItem('user')).is_seller,
            token:JSON.parse(localStorage.getItem('user')).token,
            buyer_id:res.id,
            user_type:res.user && res.user.user_type

        };
        this.account.setUser(userFromApi)
        this.toastr.success(this.translate.instant('TEXT_TOAST_PROFILE_SAVED'));
    }

    profileSaved(type){
        this.account.profileData(this.form.value,type).pipe(
            finalize(() => this.saveInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe((res) => {
            this.setData(res);
        });
    }

    valueChange(){
        this.showSaveButton=!this.showSaveButton;
        this.form.enable();
        window.scroll(0,0)
        document.getElementById('profile-first-name').focus();
        this.form.markAllAsTouched()
    }
}

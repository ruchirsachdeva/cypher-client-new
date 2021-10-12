import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountApi } from '../../../../api/base';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-page-seller',
    templateUrl: './page-seller.component.html',
})
export class PageSellerComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    form: FormGroup;
    saveInProgress = false;

    constructor(
        private account: AccountApi,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private translate: TranslateService,
    ) { }

    ngOnInit(): void{
        this.form = this.fb.group({
            firstName: [this.account.user.firstName],
            lastName: [this.account.user.lastName],
			address: [this.account.user.address],
			state: [this.account.user.state],
			zipcode: [this.account.user.zipcode],
			country: [this.account.user.country],
            email: [this.account.user.email],
            phone: [this.account.user.phone],
			selleraddress: [this.account.user.selleraddress, [Validators.required]],
			sellerstate: [this.account.user.sellerstate, [Validators.required]],
			sellerzipcode: [this.account.user.sellerzipcode, [Validators.required]],
			sellercountry: [this.account.user.sellercountry, [Validators.required]],
			selleremail: [this.account.user.selleremail, [Validators.required, Validators.email]],
            sellerphone: [this.account.user.sellerphone, [Validators.required]],
			bankaccountholdername: [this.account.user.bankaccountholdername, [Validators.required]],
			bankaccountnumber: [this.account.user.bankaccountnumber, [Validators.required]],
			ifsccode: [this.account.user.ifsccode, [Validators.required]],
			aadharnumber: [this.account.user.aadharnumber, [Validators.required]],
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    save(): void
	{
        this.form.markAllAsTouched();

        if (this.saveInProgress || this.form.invalid)
		{
            return;
        }

        this.saveInProgress = true;
		this.account.editProfile(this.form.value).pipe(
            finalize(() => this.saveInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.toastr.success(this.translate.instant('TEXT_TOAST_PROFILE_SAVED'));
        });
        
    }
}

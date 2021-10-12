import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressFormComponent } from '../../../shared/components/address-form/address-form.component';
import { AccountApi, EditAddressData } from '../../../../api/base';
import { Address } from '../../../../interfaces/address';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-page-seller',
    templateUrl: './page-seller.component.html',
})
export class PageSellerComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    form: FormGroup;

    @ViewChild(AddressFormComponent) addressForm: AddressFormComponent;

    addressId: number = null;
    saveInProgress = false;
    firstOrDefaultAddress = false;
    showSaveButton: boolean;
    showHTML: boolean;
    msgShown: string;
    apiSuccess: string;
    constructor(
        private accountApi: AccountApi,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private translate: TranslateService,

    ) {
        if (!this.accountApi.user.firstName) {
            this.toastr.error('Please fill buyer details first to register as a seller');
            this.router.navigateByUrl('/account/profile')
            return;
        }
    }

    ngOnInit(): void {


        this.form = this.fb.group({
            address: ['', Validators.required],
            state: ['', Validators.required],
            zipCode: ['', Validators.required],
            country: ['India', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone_number: ['', Validators.required],
            account_name: ['', Validators.required],
            account_number: ['', Validators.required],
            ifsc_code: ['', Validators.required],
            aadhar: ['', Validators.required],

        });

        if (!this.accountApi.user.is_seller) {
            this.msgShown='Status: Approval Pending'
            this.apiSuccess='Applied for Seller Successfully'
        }else{
            this.msgShown='Status: Approved'
            this.apiSuccess='Update Successfully'
        } 
       
        this.geSellerData();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    save(): void {
        this.form.markAllAsTouched();

        if (this.saveInProgress || this.form.invalid) {
            return;
        }


        this.saveInProgress = true;

        let data = { ...this.form.value, 'user_id': this.accountApi.user.user_id }

        if (this.accountApi.user.is_seller) {
            this.sellertDataSaveinDB(data, 'update');
        } else {
            this.sellertDataSaveinDB(data, 'add')
        }




    }

    sellertDataSaveinDB(data, type) {
        this.accountApi.sellerData(data, type).pipe(
            finalize(() => this.saveInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe((res) => {

            this.toastr.success(this.translate.instant(`${this.apiSuccess}`));
        },error=>{
            this.toastr.error(`${error.error.errors.errors[0].message || error.error.errors[0]}`);

        });
    }

 

   

    geSellerData() {
        this.accountApi.getSellerData().pipe(
            finalize(() => {
              this.showHTML=true;
              if(!this.form.value.address){
                  this.msgShown=''
              }
            })
        ).subscribe(res => {
            this.form = this.fb.group({
                address: [res.address, Validators.required],
                state: [res.state, Validators.required],
                zipCode: [res.zipCode, Validators.required],
                country: ['India', Validators.required],
                email: [res.email, [Validators.required, Validators.email]],
                phone_number: [res.phone_number, Validators.required],
                account_name: [res.account_name, Validators.required],
                account_number: [res.account_number, Validators.required],
                ifsc_code: [res.ifsc_code, Validators.required],
                aadhar: [res.aadhar, Validators.required],
    
            });
            localStorage.setItem('sellerId',res.id)
        })
    }
}

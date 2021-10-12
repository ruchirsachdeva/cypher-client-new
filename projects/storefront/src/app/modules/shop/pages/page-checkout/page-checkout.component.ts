import { Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, finalize, map, pairwise, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TermsModalComponent } from '../../../shared/components/terms-modal/terms-modal.component';
import { CartService } from '../../../../services/cart.service';
import { of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AddressFormComponent } from '../../../shared/components/address-form/address-form.component';
import { RegisterFormComponent } from '../../../shared/components/register-form/register-form.component';
import { TranslateService } from '@ngx-translate/core';
import { AccountApi, CheckoutData, ShopApi } from '../../../../api/base';
import { environment } from '../../../../../environments/environment';
import { AddressData } from '../../../../interfaces/address';
import { ToastrService } from 'ngx-toastr';

import { UrlService } from '../../../../services/url.service';
 declare var Razorpay
@Component({
    selector: 'app-page-checkout',
    templateUrl: './page-checkout.component.html',
})
export class PageCheckoutComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    private checkout$: Subject<CheckoutData> = new Subject<CheckoutData>();

    form: FormGroup;

    payPalConfig: IPayPalConfig;
    payPalInit = false;

    checkoutInProgress = false;
    


    options = {
        "key": "rzp_live_ESxVsr2zhuXjlt", // Enter the Key ID generated from the Dashboard
        "amount": 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Cypher",
        "description": "",
        "image": "/assets/images/favicon.png",
        // "order_id":2, 
        "handler": function (response){
            console.log(response.razorpay_payment_id);
           
            
           
           
    
        },
        "prefill": {
            "name": "",
            "email": "",
            "contact": ""
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };


    payments = [
    
        {
            name: 'razor',
            label: 'TEXT_PAYMENT_PAYTYM_LABEL',
            description: 'TEXT_PAYMENT_PAYTYM_DESCRIPTION',
            checked:true
        },
    ];


    //@ViewChild('billingAddressForm', {read: AddressFormComponent}) billingAddressForm: AddressFormComponent;

    //@ViewChild('shippingAddressForm', {read: AddressFormComponent}) shippingAddressForm: AddressFormComponent;

    @ViewChild('registerForm', {read: RegisterFormComponent}) registerForm: RegisterFormComponent;

    enablePaypalButton = () => {};
    disablePaypalButton = () => {};

    constructor(
        private fb: FormBuilder,
        private modalService: BsModalService,
        private router: Router,
        private translate: TranslateService,
        private shopApi: ShopApi,
        private zone: NgZone,
        public url: UrlService,
        public accountApi: AccountApi,
        public cart: CartService,
        private toastr: ToastrService,
    ) {
        this.form = this.fb.group({
            //billingAddress: [{}],

            createAccount: [false],
            account: [{}],

            //shipToDifferentAddress: [false],
            //shippingAddress: [{}],


            paymentMethod: [''],

            agree: [false, [Validators.requiredTrue]],
        });

        this.form.get('account').disable({emitEvent: false});
        //this.form.get('shippingAddress').disable({emitEvent: false});

        // this.form.valueChanges.pipe(
        //     startWith(of(this.form.value)),
        //     pairwise(),
        // ).subscribe(([oldValue, newValue]) => {
            
        //     if (oldValue.createAccount !== newValue.createAccount) {
        //         this.toggleFormControl('account', newValue.createAccount);
        //     }
        //     if (oldValue.paymentMethod !== newValue.paymentMethod && newValue.paymentMethod === 'paypal') {
        //         this.payPalInit = false;
        //     }

        //     if (this.form.valid) {
        //         this.enablePaypalButton();
        //     } else {
        //         this.disablePaypalButton();
        //     }
        // });
    }

    ngOnInit(): void {
        sessionStorage.removeItem('isCart')

        this.cart.quantity$.pipe(
            filter(x => x === 0),
            takeUntil(this.destroy$),
        ).subscribe(() => this.router.navigateByUrl('/shop/cart').then());

        this.checkout$.pipe(
            tap(() => this.checkoutInProgress = true),
            switchMap(checkoutData => {
                const value = this.form.value;

                if (value.createAccount) {
                    return this.accountApi.signUp('', '', value.account.email, value.account.password).pipe(
                        map(() => checkoutData),
                    );
                }

                return of(checkoutData);
            }),
            switchMap(checkoutData => this.shopApi.checkout(checkoutData)),
            tap(() => this.checkoutInProgress = false),
            finalize(() => this.checkoutInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(order => {
            this.router.navigateByUrl(`/shop/checkout/${order.token}`).then();
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    toggleFormControl(controlName: string, isEnabled: boolean): void {
        if (isEnabled) {
            this.form.get(controlName).enable({emitEvent: false});
        } else {
            this.form.get(controlName).disable({emitEvent: false});
        }
    }

    showTerms(event: MouseEvent): void {
        event.preventDefault();

        this.modalService.show(TermsModalComponent, {class: 'modal-lg'});
    }

    createOrder(): void {

        if (!this.checkData()) {
            return;
        }
        let data=JSON.parse(localStorage.getItem('user'));
        if(!data.address){
            this.toastr.error('Please fill user details to continue');
            return;
        }
        let product_id=JSON.parse(localStorage.getItem('cartItems')) && JSON.parse(localStorage.getItem('cartItems'))[0]['product']['id']

        this.accountApi.orderGenerate({    "quantity":1,
        product_id
    }).subscribe(res=>{

        })

        let price=JSON.parse(localStorage.getItem('cartItems')) && JSON.parse(localStorage.getItem('cartItems'))[0]['product']['price']

     
        this.options['amount']=(Number(price)+25)*100
        var rzp1 = new Razorpay(this.options);
        rzp1.open();
        rzp1.on('payment.failed', function (response){
         console.error(response);
         
    });
    

        // than i will create form
        }

      

    private markAllAsTouched(): void {
        this.form.markAllAsTouched();
        //this.billingAddressForm.markAsTouched();
        //this.shippingAddressForm.markAsTouched();
        // this.registerForm.markAsTouched();
    }

    private checkData(): boolean {
        this.markAllAsTouched();

        if (this.form.invalid) {
            this.toastr.error(this.translate.instant('ERROR_CHECKOUT'));
        }

        return this.form.valid;
    }


   
   
}

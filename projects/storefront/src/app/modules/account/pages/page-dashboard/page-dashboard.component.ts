import { ChangeDetectorRef, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { OwlCarouselOConfig } from 'ngx-owl-carousel-o/lib/carousel/owl-carousel-o-config';
import { AccountApi } from '../../../../api/base';
import { timer, combineLatest, Observable, of, Subject } from 'rxjs';
import { LanguageService } from '../../../language/services/language.service';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AbstractControl,
    ControlValueAccessor,
    FormBuilder,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR, ValidationErrors,
    Validator,
    Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

let uniqueId = 0;

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
})
export class PageDashboardComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();
    showCarousel = true;

    carouselOptions: Partial<OwlCarouselOConfig>;

    private readonly dataId: number = ++uniqueId;
    form: FormGroup;
    saveInProgress = false;
    isAdmin: boolean = false;
    get formId(): string {
        return `app-addproduct-form-id-${this.dataId}`;
    }

    constructor(
        private language: LanguageService,
        private cd: ChangeDetectorRef,
        public account: AccountApi,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private toastr: ToastrService,

    ) { }
    keyword = 'name';
    approvedProduct = []


    sneakerArray=[];

    sizeArray=[
        {
               key:'XXS',
               value:'1'
        },
        {
            key:'XS',
            value:'2'
     },
     {
        key:'S',
        value:'3'
 },
 {
    key:'M',
    value:'4'
}, {
    key:'L',
    value:'5'
}, {
    key:'XL',
    value:'6'
},
{
    key:'XXL',
    value:'7'
}
    ]

    ngOnInit(): void {


        for(let i=4;i<=13;i=i+0.5){
            this.sneakerArray.push(i)
        }

        if (JSON.parse(localStorage.getItem('user')).user_type === 'Admin') {
            this.isAdmin = true;
        }




        this.form = this.fb.group({
            category: ['Sneaker'],
            sku: [''],
            name: [''],
            product: [''],
            brand: [''],
            color: [''],
            size: [''],
            box_condition: [''],
            price: [''],
            other_detail: [''],
            stock:[]
        });
        this.initOptions();

        // Since ngx-owl-carousel-o cannot re-initialize itself, we will do it manually when the direction changes.
        this.language.directionChange$.pipe(
            switchMap(() => timer(250)),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.initOptions();

            this.showCarousel = false;
            this.cd.detectChanges();
            this.showCarousel = true;
        });
    }
    initOptions(): void {
        this.carouselOptions = {
            items: 1,
            dots: true,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            rtl: this.language.isRTL(),
        };
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

        this.saveInProgress=true

        this.form.value.sku = +this.form.value.sku
        this.form.value.price = +this.form.value.price

        let obj = {
            ...this.form.getRawValue(),

            "images": ["test"]

        }

           if(this.isAdmin){
            this.account.adminProductAdd(obj).pipe(
                finalize(() => this.saveInProgress = false),
                takeUntil(this.destroy$),
            ).subscribe((res) => {
                this.toastr.success(`Product successfully uploaded.`);
            }
                ,
                error => {
                    this.toastr.error(`${error.error.errors[0].message}`);
                },
    
            );
           }else{
               obj['productId']=obj['name'] && +obj['name']['id']
               obj['size']=+obj['size']
               obj['price']=+obj['price']

               delete obj['name']
            this.account.sellerProductAdd(obj).pipe(
                finalize(() => this.saveInProgress = false),
                takeUntil(this.destroy$),
            ).subscribe((res) => {
                this.toastr.success(`Product successfully uploaded. Awaitaing Approval`);
            }  ,
                error => {
                    this.toastr.error(`${error.error.errors[0].message}`);
                },
    
            );
           }
       




    }

    onImageAdd(file) {
        this.account.uploadImage(file).subscribe(res => {
            if (res && res.data) {

            }
        }, err => {

        })
    }

    returnPrice(a, b, c, d) {

        return (a) - (b + c + d);
    }


    selectEvent(item) {
        this.form.controls.sku.setValue(item.sku)
        this.form.controls.sku.disable();
        this.form.controls.brand.setValue(item.brand)
        this.form.controls.brand.disable();
        this.form.controls.color.setValue(item.color)
        this.form.controls.color.disable();

    }

    onChangeSearch(search: string) {


        if (search.length > 2) {

            this.approvedProduct = []

            let obj = {
                "name": search,
                // "status": "approved",
                // "active": true,
                // userId: JSON.parse(localStorage.getItem('user')).user_id,
                category:this.form.value.category
                
            }
            this.account.getProductsNamesAdmin(obj).subscribe((res) => {
                this.approvedProduct = res;
            }
                ,
                error => {
                    this.toastr.error(`${error.error.errors.name}`);
                })

        }
    }


}

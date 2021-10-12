import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Product,
    ProductAttribute,
    ProductAttributeGroup,
    ProductCompatibilityResult
} from '../../../../interfaces/product';
//import { Vehicle } from '../../../../interfaces/vehicle';
import { ProductGalleryLayout } from '../../../shared/components/product-gallery/product-gallery.component';
import { UrlService } from '../../../../services/url.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../../../../services/cart.service';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { ShopApi, AccountApi } from '../../../../api/base';
import { Observable, of, Subject } from 'rxjs';
import { Breadcrumb } from '../../../shared/components/block-header/block-header.component';
import { getCategoryPath } from '../../../../functions/utils';
import { LanguageService } from '../../../language/services/language.service';
import { ToastrService } from 'ngx-toastr';

export type PageProductLayout = 'sidebar' | 'full';

export type PageProductSidebarPosition = 'start' | 'end';

export interface PageProductData {
    layout: PageProductLayout;
    sidebarPosition: PageProductSidebarPosition;
    product: Product;
}

@Component({
    selector: 'app-page-product',
    templateUrl: './page-product.component.html',
})
export class PageProductComponent implements OnInit {
    private destroy$: Subject<void> = new Subject<void>();

    layout: PageProductLayout = 'sidebar';

    sidebarPosition: PageProductSidebarPosition = 'start';

    breadcrumb$: Observable<Breadcrumb[]>;

    //vehicle: Vehicle = null;

    product;

    featuredAttributes: ProductAttribute[] = [];

    spec: ProductAttributeGroup[] = [];

    relatedProducts: Product[] = [];

    form: FormGroup;

    addToCartInProgress = false;

    @ViewChild('tabs', {read: ElementRef}) tabsElementRef: ElementRef;
    showHtml: boolean;

    get tabsElement(): HTMLElement {
        return this.tabsElementRef.nativeElement;
    }

    get galleryLayout(): ProductGalleryLayout {
        return `product-${this.layout}` as ProductGalleryLayout;
    }

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private translate: TranslateService,
        private language: LanguageService,
        private cart: CartService,
        private shop: ShopApi,
        //public vehicleService: VehicleApi,
        public url: UrlService,
        private toastr: ToastrService,
        public account: AccountApi,

    ) { }

    ngOnInit(): void {

        
        const product$ = this.route.data.pipe(map((data: PageProductData) => data.product));

        this.route.data.subscribe((data: PageProductData) => {
            this.layout = data.layout;
            this.sidebarPosition = data.sidebarPosition;
            if(!data.product){
                this.router.navigate(['/'])
            }
            this.account.getProductsNamesAdmin({}).subscribe((res) => {
                let product=res.find(d=>d.name===data.product)
                this.product =product;
                this.product['images'][0]='assets/images/products/product-5-1.png'
                this.showHtml=true;
              })
            // this.featuredAttributes = this.product.attributes.filter(x => x.featured);

            // this.spec = this.product.type.attributeGroups.map(group => ({
            //     ...group,
            //     attributes: group.attributes.map(attribute => (
            //         this.product.attributes.find(x => x.slug === attribute) || null
            //     )).filter(x => x !== null),
            // })).filter(x => x.attributes.length > 0);
        });

        // this.breadcrumb$ = this.language.current$.pipe(
        //     switchMap(() => product$.pipe(
        //         map(product => [
        //             {label: this.translate.instant('LINK_HOME'), url: '/'},
        //             {label: this.translate.instant('LINK_SHOP'), url: this.url.shop()},
        //             ...getCategoryPath(product.categories[0]).map(x => ({label: x.name, url: this.url.category(x)})),
        //             {label: product.name, url: '/'},
        //         ]),
        //     )),
        // );

        // this.route.data.pipe(
        //     map((data: PageProductData) => data.product),
        //     switchMap(product => {
        //         if (!product) {
        //             return of([]);
        //         }

        //         return this.shop.getRelatedProducts(product.id, 8);
        //     }),
        //     takeUntil(this.destroy$),
        // ).subscribe(x => this.relatedProducts = x);

        

        this.form = this.fb.group({
            options: [{}],
            quantity: [1, [Validators.required]],
        });
    }

    scrollToTabs(): void {
        this.tabsElement.scrollIntoView({behavior: 'smooth'});
    }

    addToCart(): void {
        if (this.addToCartInProgress) {
            return;
        }
        if (this.form.get('quantity').invalid) {
            alert(this.translate.instant('ERROR_ADD_TO_CART_QUANTITY'));
            return;
        }
        if (this.form.get('options').invalid) {
            alert(this.translate.instant('ERROR_ADD_TO_CART_OPTIONS'));
            return;
        }
        

        const options: {name: string; value: string}[] = [];
        const formOptions = this.form.get('options').value;

        Object.keys(formOptions).forEach(optionSlug => {
            const option = this.product.options.find(x => x.slug === optionSlug);

            if (!option) {
                return;
            }

            const value = option.values.find(x => x.slug === formOptions[optionSlug]);

            if (!value) {
                return;
            }

            options.push({name: option.name, value: value.name});
        });


  
        let cartItems=JSON.parse(localStorage.getItem('cartItems'));
        if(cartItems && cartItems[0] && cartItems[0].quantity===1){

            if(localStorage.getItem('user')){
                this.toastr.error('More than 1 product can not be added');
                this.router.navigate(['/shop/cart'])
            }else{
                sessionStorage.setItem('isCart','yes')
                this.toastr.error('Kindly Login to Proceed');
                this.router.navigate(['/account/login'])
            }
            return;
        }

        this.addToCartInProgress = true;

        this.cart.add(this.product, this.form.get('quantity').value, options).pipe(
            finalize(() => this.addToCartInProgress = false),
        ).subscribe(res=>{
            if(localStorage.getItem('user')){
                this.router.navigate(['/shop/cart'])
            }else{
                sessionStorage.setItem('isCart','yes')
                this.toastr.error('Kindly Login to Proceed');
                this.router.navigate(['/account/login'])
            }
        });
    }

    compatibility(): ProductCompatibilityResult {
        
        if (this.product.compatibility === 'all') {
            return 'all';
        }
        if (this.product.compatibility === 'unknown') {
            return 'unknown';
        }
        
    }
}

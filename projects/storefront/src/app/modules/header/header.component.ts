import {
    AfterViewInit,
    Component,
    ElementRef,
    HostBinding,
    Inject,
	HostListener,
    NgZone,
    OnDestroy, OnInit,
    PLATFORM_ID,
    ViewChild,
} from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { AccountApi } from '../../api/base';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { HeaderService } from '../../services/header.service';
import { TranslateService } from '@ngx-translate/core';
import { UrlService } from '../../services/url.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    email$: Observable<string | null> = this.account.user$.pipe(map(x => x ? x.email : null));
	searchIsOpen = false;
	@ViewChild('searchForm') searchForm: ElementRef<HTMLElement>;

    @ViewChild('searchInput') searchInput: ElementRef<HTMLElement>;
	searchPlaceholder$ = this.translate.stream('INPUT_SEARCH_PLACEHOLDER');

    @ViewChild('searchIndicator') searchIndicator: ElementRef<HTMLElement>;
    departmentsLabel$: Observable<string>;
    approvedProduct: any;
    keyword = 'name';

    constructor(
        private account: AccountApi,
        private translate: TranslateService,
        public wishlist: WishlistService,
        public cart: CartService,
        public header: HeaderService,
        public url: UrlService,
        private router:Router,
        private toastr: ToastrService,
    ) { }

    ngOnInit(): void {
        this.departmentsLabel$ = this.header.desktopLayout$.pipe(
            switchMap(layout => this.translate.stream(
                layout === 'spaceship' ? 'BUTTON_DEPARTMENTS' : 'BUTTON_DEPARTMENTS_LONG',
            )),
        );
    }
	openSearch(): void {
        this.searchIsOpen = true;

        if (this.searchInput.nativeElement) {
            this.searchInput.nativeElement.focus();
        }
        // this.router.navigate(['/shop/cart'])
    }

    cartGo(){
        this.router.navigate(['/shop/cart'])

    }

    closeSearch(): void {
        this.searchIsOpen = false;
    }
	
	@HostListener('window:scroll', ['$event'])
		onWindowScroll(e)
		{
			
			
			if (window.pageYOffset > 200) 
			{
				let element = document.getElementById('stickyheader');
				element.classList.add('sticky');
			}
			else
			{
				let element = document.getElementById('stickyheader');
				element.classList.remove('sticky'); 
			}
      }

      onChangeSearch(search: string) {


        if (search.length > 2) {

            this.approvedProduct = []

            let obj = {
                "name": search,
                "status": "approved"
                
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
      

    selectEvent(item) {
        this.router.navigate([this.url.product(item)])
       
    }
     
}

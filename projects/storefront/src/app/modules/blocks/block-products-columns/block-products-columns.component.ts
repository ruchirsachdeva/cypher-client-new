import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { AccountApi } from '../../../api/base';
import { ToastrService } from 'ngx-toastr';

export interface BlockProductsColumnsItem {
    title: string;
    products: Product[];
}

@Component({
    selector: 'app-block-products-columns',
    templateUrl: './block-products-columns.component.html'
})
export class BlockProductsColumnsComponent {
    @Input() columns: BlockProductsColumnsItem[] = [];

    @HostBinding('class.block') classBlock = true;

    @HostBinding('class.block-products-columns')
    classBlockProductsColumns = true;
    allProducts: any;

    constructor(public account: AccountApi, private toastr: ToastrService) {
        this.getAllSneakers();
    }

    getAllSneakers() { 
        this.account.getProductsNamesAdmin({"status": "approved"}).subscribe(
            res => {
                this.allProducts = res;
            },
            error => {
                // this.toastr.error(`${error.error.errors.name}`);
            }
        );
    }
}

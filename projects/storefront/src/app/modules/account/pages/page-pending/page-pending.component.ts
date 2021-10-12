import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { AccountApi } from '../../../../api/base';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

let uniqueId = 0;

@Component({
    selector: 'app-page-pending',
    templateUrl: './page-pending.component.html'
})
export class PagePendingComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();
    pendingProducts: any;

    constructor(
        public account: AccountApi,
        private router: Router,
        private toastr: ToastrService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getPendingProducts();
    }

    getPendingProducts() {
        let obj = {
            status: 'pending'
        };
        this.account.getProductsNamesAdmin(obj).subscribe(
            res => {
                this.pendingProducts = res;
            },
            error => {
                this.toastr.error(`${error.error.errors.name}`);
            }
        );
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}

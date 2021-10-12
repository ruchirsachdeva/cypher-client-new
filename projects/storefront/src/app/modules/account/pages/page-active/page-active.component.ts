import { Component, forwardRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { AccountApi } from '../../../../api/base';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ToastrService } from 'ngx-toastr';


let uniqueId = 0;

@Component({
    selector: 'app-page-active',
    templateUrl: './page-active.component.html',
})

export class PageActiveComponent implements OnInit, OnDestroy
{
    private destroy$: Subject<void> = new Subject<void>();
	html: string = `<p>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><p>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>`;
	
    idToBeDeleted = '';
	modalRef: BsModalRef;
	message: string;
	allProducts: any;
  
	constructor(
		public account: AccountApi,
        private router: Router,
        private route: ActivatedRoute,
		private modalService: BsModalService,
		private toastr: ToastrService,

    ) { }
	
   

    ngOnInit(): void
	{
        this.getAllSneakers()
	}
	
	getAllSneakers(){
		
		  this.account.getProductsNamesAdmin({}).subscribe((res) => {
		  this.allProducts=res;
		}
		,
			error => {
				this.toastr.error(`${error.error.errors.name}`);
	})
	}
	

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
	
	openModal(template: TemplateRef<any>, id: any)
	{
		this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
		this.idToBeDeleted = id;
	}

	confirm(): void
	{
		this.message = 'Confirmed!';
		this.modalRef.hide();
		this.delete();
	}

	delete():void
	{
		console.log('deleted',this.idToBeDeleted,' record');
	}
    
	decline(): void
	{
		this.message = 'Declined!';
		this.modalRef.hide();
	}
	
	
	
}

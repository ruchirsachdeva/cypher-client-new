import { Component, forwardRef, OnDestroy, OnInit, Input } from '@angular/core';
import {
    FormGroup,
} from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
})
export class AddressFormComponent implements OnInit, OnDestroy{
    private destroy$: Subject<void> = new Subject<void>();

    @Input() form;

    formId
   
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


    constructor(
    ) { }

    ngOnInit(): void {
       
      

       
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

  


    


   
}

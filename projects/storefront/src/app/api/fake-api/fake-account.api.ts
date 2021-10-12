import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AccountApi, EditAddressData, EditProfileData, GetOrdersListOptions } from '../base';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { tap } from 'rxjs/operators';
import { Address } from '../../interfaces/address';
import { OrdersList } from '../../interfaces/list';
import { Order } from '../../interfaces/order';
import {
    accountChangePassword,
    accountEditProfile,
	accountSignIn,
    accountSignOut,
    accountSignUp,
    addAddress,
    delAddress,
    editAddress,
    getAddress,
    getAddresses,
    getDefaultAddress,
    getOrderById,
    getOrderByToken,
    getOrdersList,
} from '../../../fake-server/endpoints';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';


@Injectable()
export class FakeAccountApi extends AccountApi {
    private userSubject: BehaviorSubject<User | null>;

    get user(): User | null { return this.userSubject.value; }

    readonly user$: Observable<User | null>;

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private authService:AuthService,
        private cart:CartService
    ) {
        super();

        let storedUser = null;

        if (isPlatformBrowser(this.platformId)) {
            storedUser = localStorage.getItem('user');
            storedUser = storedUser ? JSON.parse(storedUser) : null;
        }

        this.userSubject = new BehaviorSubject<User | null>(storedUser);
        this.user$ = this.userSubject.asObservable();
    }

    signIn(email: string, password: string): Observable<User> {
        return accountSignIn(email, password).pipe(
            tap(user => this.setUser(user)),
        );
    }

    signUp(firstName: string, lastName: string, email: string, password: string): Observable<User> {
        return accountSignUp(firstName, lastName, email, password).pipe(
            tap(user => this.setUser(user)),
        );
    }

    signOut(): Observable<void> {
        return accountSignOut().pipe(
            tap(() => this.setUser(null)),
        );
    }

   
	
    changePassword(oldPassword: string, newPassword: string): Observable<void> {
        return accountChangePassword(oldPassword, newPassword);
    }

    addAddress(data: EditAddressData): Observable<Address> {
        return addAddress(data);
    }

    editAddress(addressId: number, data: EditAddressData): Observable<Address> {
        return editAddress(addressId, data);
    }

    delAddress(addressId: number): Observable<void> {
        return delAddress(addressId);
    }

    getDefaultAddress(): Observable<Address | null> {
        return getDefaultAddress();
    }

    getAddress(addressId: number): Observable<Address> {
        return getAddress(addressId);
    }

    getAddresses(): Observable<Address[]> {
        return getAddresses();
    }

    getOrdersList(options?: GetOrdersListOptions): Observable<OrdersList> {
        return getOrdersList(options);
    }

    getOrderById(id: number): Observable<Order> {
        return getOrderById(id);
    }

    getOrderByToken(token: string): Observable<Order> {
        return getOrderByToken(token);
    }

    public setUser(user: User): void {
        this.userSubject.next(user);
        
        if(user!==null){
            localStorage.setItem('user', JSON.stringify(user));
        }else{
            localStorage.clear();
            this.cart.data={
                items: [],
        quantity: 0,
        subtotal: 0,
        totals: [],
        total: 0,
            }
        }
    }

    generateOtp(phone) {
        return this.authService
        .generateOtp(phone)
       
    }

    verifyOtp(phone,otp) {
        return this.authService
        .verifyOtp(phone,otp)
       
    }

    generateOtpLogin(phone) {
        return this.authService
        .generateOtpLogin(phone)
       
    }

    

    profileData(data: EditProfileData,type) {
        return this.authService
        .profileData(data,type)
    }

    sellerData(data,type){
        return this.authService
        .sellerData(data,type)
    }

    getSellerData(){
        return this.authService
        .getSellerData()
    }

    uploadImage(file){
        return this.authService.uploadImage(file)
    }
    adminProductAdd(data){
        return this.authService.adminProductAdd(data)

    }

    sellerProductAdd(data){
        return this.authService.sellerProductAdd(data)

    }

    getProductsNamesAdmin(data){
        return this.authService.getProductsNamesAdmin(data)

    }

    getProductNamesSeller(data){
        return this.authService.getProductNamesSeller(data)

    }

    orderGenerate(data){
        return this.authService.orderGenerate(data)

    }
}

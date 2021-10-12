import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}
    httpOptions 


    accountSignup(
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ): Observable<User> {
        const data = {
            first_name: firstName,
            last_name: lastName,
            phone_number: '38 972 588-42-36',
            email,
            password,
        };
        return this.http
            .post<any>(`${environment.apiUrl}/iam/client`, data)
            .pipe(
                map((user) => {
                    const userFromApi: User = {
                        email: user.email,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        phone: user.phone_number,
                        address: '182, Hauz Khas Appartments, New Delhi',
                        state: 'Delhi',
                        zipcode: '110016',
                        country: 'India',
                        avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
                    };
                    return userFromApi;
                })
            );
    }

    accountSignIn(email, password): Observable<User> {
        const data = {
            username: email,
            password,
            user_type: 'user',
        };

        return this.http
            .post<any>(`${environment.apiUrl}/iam/login/jwt`, data)
            .pipe(
                map((user) => {
                    const userFromApi: User = {
                        email: user.email,
                        firstName: user.first_name,
                        lastName: user.last_name,
                        phone: user.phone_number,
                        address: '182, Hauz Khas Appartments, New Delhi',
                        state: 'Delhi',
                        zipcode: '110016',
                        country: 'India',
                        avatar: '//www.gravatar.com/avatar/bde30b7dd579b3c9773f80132523b4c3?d=mp&s=88',
                    };
                    return userFromApi;
                })
            );
    }

    generateOtp(phone){
        const data = {
            phone
        };

        return this.http
            .post<any>(`${environment.apiUrl}/api/iam/user`, data)
            .pipe(
                map((otpResponse) => {
                    
                    return otpResponse['otpRes']['otp'];
                })
            );
    }

    verifyOtp(phone,otp){
        const data = {
            phone,
            otp
        };

        return this.http
            .post<any>(`${environment.apiUrl}/api/iam/user/verify/otp`, data)
            .pipe(
                map((otpResponse) => {
                    
                    return otpResponse;
                })
            );
    }

    generateOtpLogin(phone){
        const data = {
            phone
        };

        return this.http
            .post<any>(`${environment.apiUrl}/api/iam/user/login/otp`, data)
            .pipe(
                map((otpResponse) => {
                    
                    return otpResponse['otp'];
                })
            );
    }

  

    profileData(data,type){

        this.setHeader()
    

        if(type==='add'){


        return this.http
            .post<any>(`${environment.apiUrl}/api/iam/client`, data,this.httpOptions)
            
        }else{
            return this.http
            .put<any>(`${environment.apiUrl}/api/iam/client/${JSON.parse(localStorage.getItem('user')).buyer_id}`, data,this.httpOptions)
        }
    }

    sellerData(data,type){
        this.setHeader()
       
        if(type==='add'){
            return this.http
            .post<any>(`${environment.apiUrl}/api/iam/seller`, data,this.httpOptions)
        }else{
            return this.http
            .put<any>(`${environment.apiUrl}/api/iam/seller/${(localStorage.getItem('sellerId'))}`, data,this.httpOptions)
        }

        
    }

    getSellerData(){
        this.setHeader()
        return this.http
            .get<any>(`${environment.apiUrl}/api/iam/seller/user-code/${JSON.parse(localStorage.getItem('user')).user_id}`,this.httpOptions)
    }


    adminProductAdd(data){
        this.setHeader()
        return this.http
        .post<any>(`${environment.apiUrl}/api/shop/product`, data,this.httpOptions)
    }

    sellerProductAdd(data){
        this.setHeader()
        return this.http
        .post<any>(`${environment.apiUrl}/api/shop/sellerproduct`, data,this.httpOptions)
    }

    getProductsNamesAdmin(data){
        this.setHeader()
        return this.http
        .post<any>(`${environment.apiUrl}/api/shop/product/search`, data,this.httpOptions)
    }

    getProductNamesSeller(data){
        this.setHeader()
        return this.http
        .post<any>(`${environment.apiUrl}/api/shop/sellerproduct/search`, data,this.httpOptions)
    }

    orderGenerate(data){
        this.setHeader()
        return this.http
        .post<any>(`${environment.apiUrl}/api/shop/cart`, data,this.httpOptions)
    }


 
    

    uploadImage(file) {
        this.setHeader()
        let formData = new FormData();
        formData.append('file', file);
        return this.http.post<any>(`https://jewellery-staging.herokuapp.com/api/v1/image/upload`, formData,this.httpOptions)
      }

      setHeader(){
          
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json',
         'Authorization':localStorage.getItem('user')?JSON.parse(localStorage.getItem('user'))?.token:'',
    
        })
          };
    }
}

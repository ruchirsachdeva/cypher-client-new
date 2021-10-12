export interface User {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
	address: string;
	state: string;
	zipcode: string;
	country: string;
    avatar: string;
    user_id?:number;
    token?:string;
    is_seller?:string;
    buyer_id?;
    user_type?
}

import { User } from "./User";

export class Customer extends User{
    constructor(
        username:string,
        email: string,
        tel:string,
        password:string,
        adress:string,
    ){
        super(username,email,tel,password,adress)
    }
}
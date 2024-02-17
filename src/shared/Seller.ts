import { User } from "./User";

export class Seller extends User{
    constructor(
        username:string,
        email: string,
        tel:string,
        password:string,
        adress:string,
        private companyName:string,
        private identityCard:string,
        private category:string,
        private hourStart:string,
        private hourEnd:string
    ){
        super(username,email,tel,password,adress)
    }
}
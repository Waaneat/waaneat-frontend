import { User } from "./User";

export class Seller{
    constructor(
        public id:string = '',
        public companyName:string,
        public identityCard:string,
        public category:string,
        public hourStart:string,
        public hourEnd:string
    ){
        
    }
}
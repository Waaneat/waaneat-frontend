export class Dish{
    constructor(
        public id:string,
        public dishName: string,
        public dishPrice:number,
        public dishDesc:string,
        public dishImg:string,
        public dishUrl:string,
        public isAvailable:boolean
    ){}
}
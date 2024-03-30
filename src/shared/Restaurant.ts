export class Restaurant{
    constructor(
        public id:string,
        public restoName: string,
        public restoDesc:string,
        public isAvailable:boolean,
        public restoImg:string,
        public hourStart:string,
        public hourEnd:string
    ){}
}
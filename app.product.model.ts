export class Product{
    constructor(
        public ProductId:number,public ProductName:string,
        public CategoryName:string,public Manufacturer:string,public Price:number
    ){}
}
export const Categories=['Electronics','Electrical','food'];
export const Manufacturers=['HP','Bajaj','Parle'];
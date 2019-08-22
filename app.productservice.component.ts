import {Component,OnInit} from '@angular/core';
import {HttpService} from "./../../services/app.http.service";
import {Response} from "@angular/http";
import{Product, Categories , Manufacturers} from '../../models/app.product.model';
@Component({
selector:'app-productservice-component',
templateUrl:'./app.productservice.component.view.html'
})
export class ProductServiceComponent implements OnInit{
product:Product;
products:Array<Product>;
categories=Categories;
manufacturer=Manufacturers;

headers:Array<string>;
constructor(private serv:HttpService){
    this.product=new Product(0,'','','',0);
    this.products=new Array<Product>();

    this.headers=new Array<string>();
}
ngOnInit():void{
    for(let p in this.product){
        this.headers.push(p);
    }
  this.serv.getData().subscribe((resp:Response)=>{
      this.products=resp.json();
  },(error=>{
          console.log(error);
      
  }));

}
clear():void{
    this.product=new Product(0,'','','',0);
}
save():void{
this.serv.postData(this.product).subscribe((resp:Response)=>{
    this.products=resp.json();
});
}
getSelectedData(prd:Product):void{
this.product=Object.assign({},prd);
}
deleteData(id):void{
    for(let i = 0; i < this.products.length; i++){
        if (this.products[i].ProductId === id) {
            this.products.splice(i,1);
        }
    }
}
}
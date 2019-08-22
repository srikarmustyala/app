import { Injectable } from "@angular/core";
import {Http,Response,RequestOptions,Headers} from "@angular/http";
import {Observable} from "rxjs";
import { Product } from "./../models/app.product.model"
@Injectable()
export class HttpService{
  
  url:string;

//inject http object
//http module class must be imported in import:[] of ngModule
    constructor(private http:Http){
        this.url='http://localhost:9009';
    }
getData():Observable<Response>{
    let res: Observable<Response>=null;
    let headers:Headers=new Headers({'AUTHORIZATION':'BASIC srikar:srikar'});
    const options:RequestOptions=new RequestOptions();
    options.headers=headers;
    res=this.http.get(`${this.url}/api/products`,options);
    
    return res;
}
postData(prd:Product):Observable<Response>{
    let res: Observable<Response>=null;
    let headers:Headers=new Headers({'Content-Type':'application/json'});
    const options:RequestOptions=new RequestOptions();
    options.headers=headers;
    res=this.http.post(`${this.url}/api/products`,JSON.stringify(prd),options);

    return res;
}
putData(id:number,prd:Product):Observable<Response>{
    let res: Observable<Response>=null;
    let headers:Headers=new Headers({'Content-Type':'application/json'});
    let options:RequestOptions=new RequestOptions();
    options.headers=headers;
    res=this.http.post(`${this.url}/api/products/${id}`,JSON.stringify(prd),options);

    return res;
}
deleteData(id:number):Observable<Response>{
    let res: Observable<Response>=null;
    let headers:Headers=new Headers({'Content-Type':'application/json'});
    let options:RequestOptions=new RequestOptions();
    options.headers=headers;
    res=this.http.delete(`${this.url}/api/products/${id}`,options);
    return res;
}
}
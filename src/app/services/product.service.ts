import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModule } from '../models/ResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44304/api/';

  constructor(private httpclient: HttpClient) { }

  getProducts():Observable<listResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall";
    return this.httpclient.get<listResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<listResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId;
    return this.httpclient.get<listResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModule>{
    return this.httpclient.post<ResponseModule>(this.apiUrl+"products/add",product); 
  }
}

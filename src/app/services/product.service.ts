import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api";
  private GET_PRODUCTS = `${this.baseUrl}/products`;

  constructor(private httpClient:HttpClient) { }

  getProductsList():Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.GET_PRODUCTS).pipe(
      map(response => response._embedded.products as Product[])
    )
  }
}

interface GetResponse{
  _embedded:{
    products:Product[]
  }
}

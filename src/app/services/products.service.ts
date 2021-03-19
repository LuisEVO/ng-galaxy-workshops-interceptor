import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    /*
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
    return this.http.get<IProduct[]>('http://localhost:3000/products', { headers });
    */
    return this.http.get<IProduct[]>('products');
  }

  getOne(productId: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('products/' + productId);
  }
}

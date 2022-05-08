import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = 'https://6276652d15458100a6aebc18.mockapi.io/product'
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.baseURL)
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(this.baseURL, data)
  }

  editProduct(data: any, id: string): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, data)
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}

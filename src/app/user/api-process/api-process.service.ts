import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface database {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiProcessService {
  url = 'http://192.168.1.15:3000';

  constructor(public http: HttpClient) { }



  public getProduct(page: number, limit?: number, type?: number): Observable<any> {
    return this.http.get<any>(`${this.url}/product?page=${page}&limit=${limit}&type=${type}`);
  }

  public getProductDetail(id: number): Observable<any> {
    return this.http.put<any>(`${this.url}/product/${id}`,null);
  }

}

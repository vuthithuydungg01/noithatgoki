import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  url = 'http://192.168.1.15:3000';

  constructor(public http: HttpClient) { }

  public getCart(page: number, limit: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get<any>(`${this.url}/cart?page=${page}&limit=${limit}`, { headers });
  }

}

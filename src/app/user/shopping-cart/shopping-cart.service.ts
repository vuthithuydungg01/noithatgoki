import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import {createRequestOption} from "../../create-request-option";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(public http: HttpClient) { }

  public getCart(req: any): Observable<any> {
    const params = createRequestOption(req);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    });

    return this.http.get<any>(`${environment.url}/cart`, { headers ,  params, observe: 'response' });
  }

}

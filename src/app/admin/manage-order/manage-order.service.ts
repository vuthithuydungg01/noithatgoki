import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {createRequestOption} from "../../create-request-option";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ManageOrderService {

  constructor(private http: HttpClient) { }

  getOrder(req: any): Observable<any> {
    const params = createRequestOption(req);
    return this.http.get<any>(`${environment.url}/order`, { params, observe: 'response' });
  }
}

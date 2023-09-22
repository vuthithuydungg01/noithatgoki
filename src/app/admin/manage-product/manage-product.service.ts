import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from 'src/app/create-request-option';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageProductService {

  constructor(private http: HttpClient) { }

  getProduct(req: any): Observable<any> {
    const params = createRequestOption(req);
    return this.http.get<any>(`${environment.url}/product`, { params, observe: 'response' });
  }

  addProduct(req: any): Observable<any> {
    const params = createRequestOption(req);
    return this.http.post<any>(`${environment.url}/product`, params);
  }
}

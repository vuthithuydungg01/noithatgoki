import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { createRequestOption } from 'src/app/create-request-option';

export interface database {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiProcessService {

  constructor(public http: HttpClient) { }

  getProduct(req: any): Observable<any> {
    const params = createRequestOption(req);
    return this.http.get<any>(`${environment.url}/product`, { params, observe: 'response' });
  }

  public getProductDetail(id: number): Observable<any> {
    return this.http.put<any>(`${environment.url}/product/${id}`,null);
  }

  getProject(req: any): Observable<any> {
    const params = createRequestOption(req);
    return this.http.get<any>(`${environment.url}/product`, { params, observe: 'response' });
  }

}

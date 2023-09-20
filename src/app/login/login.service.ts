import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface database {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://192.168.1.15:3000';

  constructor(public http: HttpClient) {}

  public login(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/user/login`, data);
  }

  public signUp(data: database): Observable<any> {
    return this.http.post<any>(`${this.url}/user/signup`, data);
  }
}

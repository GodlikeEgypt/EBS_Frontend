import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  login(loginRequest: { email: string, password: string }): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(`${this.BASE_URL}api/auth/login`, loginRequest, { headers });
  }
}

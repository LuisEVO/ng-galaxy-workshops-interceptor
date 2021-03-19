import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthResponse } from '../interfaces/auth-response.interface';
import { IAuthUser } from '../interfaces/auth-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(body: IAuthUser): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>('http://localhost:3000/signin', body);
  }

  signUp(body: IAuthUser): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>('http://localhost:3000/signup', body);
  }
}

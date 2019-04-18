import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_USER_URL } from '../../kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  get token() {
    return localStorage.getItem('token');
  }

  signUp(body: Object) {
    return this.http.post(BASE_USER_URL, body);
  }

  signIn(body: Object) {
    return this.http.post(`${BASE_USER_URL}/login`, body);
  }

  logout() {
    return this.http.post(`${BASE_USER_URL}/_logout`, {});
  }

  isAuthenticated() {
    return this.token !== null;
  }

  saveUserInfo(res: Object) {
    localStorage.setItem('username', res['username']);
    localStorage.setItem('token', res['_kmd']['authtoken']);
    localStorage.setItem('userId', res['_id']);
  }
}

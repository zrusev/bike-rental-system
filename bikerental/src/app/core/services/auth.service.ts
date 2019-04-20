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

  get roles() {
    return localStorage.getItem('roles');
  }

  get userId() {
    return localStorage.getItem('userId');
  }

  getUsers() {
    return this.http.get(BASE_USER_URL);
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

  isAuthorized(role: string) {
    return this.roles.toLowerCase().indexOf(role) > -1;
  }

  saveUserInfo(res: Object) {
    localStorage.setItem('userId', res['_id']);
    localStorage.setItem('username', res['username']);
    localStorage.setItem('roles', res['roles']);
    localStorage.setItem('token', res['_kmd']['authtoken']);
  }
}

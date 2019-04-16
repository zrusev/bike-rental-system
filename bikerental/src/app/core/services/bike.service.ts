import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CREATE_BIKE_URL } from '../../kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http: HttpClient
  ) {}

  createPost(body: Object) {
    return this.http.post(CREATE_BIKE_URL, body);
  }
}

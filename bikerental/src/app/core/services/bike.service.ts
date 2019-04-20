import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CREATE_BIKE_URL, ALL_BIKES } from '../../kinvey.tokens';
import { IBike } from 'src/app/components/shared/models/IBike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  constructor(
    private http: HttpClient,
  ) {}

  getAll() {
    return this.http.get<IBike[]>(ALL_BIKES);
  }

  createBike(body: Object) {
    return this.http.post(CREATE_BIKE_URL, body);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CREATE_BIKE_URL, ALL_BIKES, BASE_USER_URL, LATEST_BIKES, RENTED_BIKES, BASE_URL } from '../../kinvey.tokens';
import { IBike } from 'src/app/components/shared/models/IBike';
import { IAuthor } from 'src/app/components/shared/models/IAuthor';

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

  getLatest() {
    return this.http.get<IBike[]>(LATEST_BIKES);
  }

  getTopRented() {
    return this.http.get<IBike[]>(RENTED_BIKES);
  }

  getUserBikes(id: string) {
    return this.http.get<IBike[]>(`${BASE_URL}/bikes?query={"_acl.creator":"${id}"}&sort={"_kmd.ect": -1}`);
  }

  getById(id: string) {
    return this.http.get<IBike>(CREATE_BIKE_URL + `/${id}`);
  }

  createBike(body: Object) {
    return this.http.post(CREATE_BIKE_URL, body);
  }

  getAuthor(id: string) {
    return this.http.get<IAuthor>(BASE_USER_URL + `?query={"_id":"${id}"}`);
  }

  editBike(id: string, body: Object) {
    return this.http.put(CREATE_BIKE_URL + `/${id}`, body);
  }

  deleteBike(id: string) {
    return this.http.delete(CREATE_BIKE_URL + `/${id}`);
  }
}

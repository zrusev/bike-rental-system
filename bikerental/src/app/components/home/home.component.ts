import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BikeService } from 'src/app/core/services/bike.service';
import { IBike } from '../shared/models/IBike';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  isLoggedIn: boolean;
  username: string = '';
  latest$: Observable<IBike[]>;
  topRented$: Observable<IBike[]>;
  latest: IBike[];
  topRented: IBike[];

  constructor(
    private authService: AuthService,
    private bikeService: BikeService
  ) { }

  ngOnInit() {
    this.latest$ = this.bikeService.getLatest();
    this.topRented$ = this.bikeService.getTopRented();

    forkJoin(this.latest$, this.topRented$).subscribe(results => {
      this.latest = results[0],
      this.topRented = results[1];
    });
  }

  ngDoCheck() {
    this.username = this.authService.userName;
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}

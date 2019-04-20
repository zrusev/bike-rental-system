import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BikeService } from 'src/app/core/services/bike.service';
import { Observable } from 'rxjs';
import { IBike } from '../shared/models/IBike';

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

  constructor(
    private authService: AuthService,
    private bikeService: BikeService
  ) { }

  ngOnInit() {
    this.latest$ = this.bikeService.getLatest();
    this.topRented$ = this.bikeService.getTopRented();
  }

  ngDoCheck() {
    this.username = this.authService.userName;
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}

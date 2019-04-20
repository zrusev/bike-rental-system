import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/core/services/bike.service';
import { IBike } from '../shared/models/IBike';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  bikes: IBike[];

  constructor(
    private bikeService: BikeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const id = this.authService.userId;
    this.bikeService.getUserBikes(id).subscribe((bikes) => {
      this.bikes = bikes;
    });
  }
}

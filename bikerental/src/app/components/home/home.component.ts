import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {
  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

}

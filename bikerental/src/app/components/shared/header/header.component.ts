import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  username: string = '';
  isLoggedIn: boolean;
  isAdmin: boolean;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngDoCheck() {
    this.username = this.authService.userName;
    this.isLoggedIn = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAuthorized('Admin');
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        localStorage.clear();
        this.toastr.success('Successfully signed out!', 'Success');
        this.router.navigate([ '/' ]);
    });
  }
}

import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  @ViewChild('registerForm') registerForm: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  signUp() {
    this.authService
      .signUp(this.registerForm.value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate([ '/signin' ]);
      });
  }
}

import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @ViewChild('registerForm') registerForm: NgForm;
  passPattern = /^.*(?=.{6,10})(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9!@#$%]+$/;
// tslint:disable-next-line: max-line-length
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  signUp() {
    const form = this.registerForm.value;
    const formVal = Object.assign(this.registerForm.value, {
      name: `${form.firstname} ${form.lastname}`,
      email: form.username,
      roles: ['User']
    });

    this.authService
      .signUp(formVal)
      .subscribe((res: any) => {
        this.authService.saveUserInfo(res);
        this.toastr.success(`${res.name}: successfully signed up!`, 'Success');
        this.router.navigate([ '/' ]);
      });
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/'},
  { path: 'signin', component:  SigninComponent},
  { path: 'signup', component:  SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

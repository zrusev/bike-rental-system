import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';
import { BikeSharedModule } from './components/shared/bike/bike-shared/bike-shared.module';
import { AdminModule } from './components/admin/admin.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { SeedService } from './core/services/seed.service';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BikeSharedModule,
    AdminModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    NgHttpLoaderModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [SeedService, {
    provide: APP_INITIALIZER,
    useFactory: (ss: SeedService) => () =>  ss.seedAdmin(),
    deps: [SeedService],
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

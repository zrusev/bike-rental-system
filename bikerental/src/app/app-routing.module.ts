import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AuthorizedGuard } from './core/guards/authorized.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component:  HomeComponent},
  { path: 'bikes', loadChildren: './components/bike/bike.module#BikeModule',
    canLoad: [AuthorizedGuard] },
  { path: 'admin', loadChildren: './components/admin/admin.module#AdminModule',
    canLoad: [AuthorizedGuard, AuthenticatedGuard] },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

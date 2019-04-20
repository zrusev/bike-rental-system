import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeDeleteComponent } from './bikes/bike-delete/bike-delete.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    BikeDeleteComponent
  ], imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

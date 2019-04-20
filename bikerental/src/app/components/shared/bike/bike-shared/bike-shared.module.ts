import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeCardComponent } from './bike-card/bike-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BikeCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    BikeCardComponent
  ]
})
export class BikeSharedModule { }

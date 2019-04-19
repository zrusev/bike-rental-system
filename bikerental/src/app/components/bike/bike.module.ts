import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BikeCreateComponent } from './bike-create/bike-create.component';
import { BikeRoutingModule } from './bike-routing.module';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

@NgModule({
    declarations: [
        BikeCreateComponent,
        BikeDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BikeRoutingModule
    ],
    exports: []
})
export class BikeModule { }

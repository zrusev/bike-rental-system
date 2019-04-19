import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BikeCreateComponent } from './bike-create/bike-create.component';
import { BikeRoutingModule } from './bike-routing.module';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { GoogleMapComponent } from './bike-maps/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        BikeCreateComponent,
        BikeDetailsComponent,
        GoogleMapComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BikeRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBXhC9oLXM65vcnuEyIoQ11cgaAUc7n_iI'
        })
    ],
    exports: []
})
export class BikeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BikeCreateComponent } from './bike-create/bike-create.component';
import { BikeRoutingModule } from './bike-routing.module';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { GoogleMapComponent } from './bike-maps/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { API_MAPS_KEY } from 'src/app/kinvey.tokens';
import { BikeAllComponent } from './bike-all/bike-all.component';
import { BikeCardComponent } from './bike-card/bike-card.component';

@NgModule({
    declarations: [
        BikeCreateComponent,
        BikeDetailsComponent,
        GoogleMapComponent,
        BikeAllComponent,
        BikeCardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BikeRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: API_MAPS_KEY
        })
    ],
    exports: []
})
export class BikeModule { }

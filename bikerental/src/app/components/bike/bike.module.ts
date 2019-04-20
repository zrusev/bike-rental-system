import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { API_MAPS_KEY } from 'src/app/kinvey.tokens';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BikeAllComponent } from './bike-all/bike-all.component';
import { BikeCreateComponent } from './bike-create/bike-create.component';
import { BikeRoutingModule } from './bike-routing.module';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { GoogleMapComponent } from './bike-maps/google-map/google-map.component';
import { BikeSharedModule } from '../shared/bike/bike-shared/bike-shared.module';

@NgModule({
    declarations: [
        BikeCreateComponent,
        BikeDetailsComponent,
        GoogleMapComponent,
        BikeAllComponent
    ],
    imports: [
        CommonModule,
        BikeSharedModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BikeRoutingModule,
        NgHttpLoaderModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: API_MAPS_KEY
        })
    ],
    exports: []
})
export class BikeModule { }

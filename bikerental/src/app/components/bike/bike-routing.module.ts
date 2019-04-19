import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BikeCreateComponent } from './bike-create/bike-create.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

const routes: Route[] = [
    { path: 'create', component: BikeCreateComponent },
    { path: 'details', component: BikeDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BikeRoutingModule { }

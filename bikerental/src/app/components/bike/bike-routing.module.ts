import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BikeCreateComponent } from './bike-create/bike-create.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { BikeAllComponent } from './bike-all/bike-all.component';

const routes: Route[] = [
    { path: 'all', component: BikeAllComponent },
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

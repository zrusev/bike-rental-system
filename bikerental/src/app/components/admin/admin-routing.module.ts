import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BikeDeleteComponent } from './bikes/bike-delete/bike-delete.component';

const routes: Route[] = [
    { path: 'bikes/delete', component: BikeDeleteComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }

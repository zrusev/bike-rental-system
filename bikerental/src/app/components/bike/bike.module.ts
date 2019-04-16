import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BikeCreateComponent } from './bike-create/bike-create.component';

@NgModule({
    declarations: [
        BikeCreateComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        BikeCreateComponent
    ]
})
export class BikeModule {}

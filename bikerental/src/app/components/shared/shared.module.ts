import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BikeModule } from '../bike/bike.module';

@NgModule({
    declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
],
    imports: [
        CommonModule,
        RouterModule,
        BikeModule
    ],
    exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
]
})
export class SharedModule {}

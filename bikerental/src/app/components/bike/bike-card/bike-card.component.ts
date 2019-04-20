import { Component, Input } from '@angular/core';
import { IBike } from '../../shared/models/IBike';

@Component({
  selector: 'app-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.css']
})
export class BikeCardComponent {
  @Input() bike: IBike;
}

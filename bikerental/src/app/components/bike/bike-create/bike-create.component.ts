import { Component, OnInit, Input } from '@angular/core';
import { ICoords } from '../../shared/models/ICoords';

@Component({
  selector: 'app-bike-create',
  templateUrl: './bike-create.component.html',
  styleUrls: ['./bike-create.component.css']
})
export class BikeCreateComponent implements OnInit {
  coordinates: ICoords;

  constructor() { }

  ngOnInit() {
  }

  onMarked(coords: ICoords) {
    console.log(coords);
    this.coordinates = coords;
  }
}

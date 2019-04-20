import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ICoords } from 'src/app/components/shared/models/ICoords';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  zoom: number = 15;
  @Input() lat: number = 42.6978634;
  @Input() lng: number = 23.3221789;

  @Output() markerClicked = new EventEmitter<ICoords>();

  placeMarker(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;

    this.markerClicked.emit({
      'lat': event.coords.lat,
      'lng': event.coords.lng
    });
  }
}

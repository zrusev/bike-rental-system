import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/core/services/bike.service';
import { IBike } from '../../shared/models/IBike';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bike-all',
  templateUrl: './bike-all.component.html',
  styleUrls: ['./bike-all.component.css']
})
export class BikeAllComponent implements OnInit {
  bikes$: Observable<IBike[]>;

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikes$ = this.bikeService.getAll();
  }

}

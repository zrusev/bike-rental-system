import { Component, OnInit } from '@angular/core';
import { IBike } from '../../shared/models/IBike';
import { BikeService } from 'src/app/core/services/bike.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {
  bike: IBike;
  bikeId: string;

  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.bikeId = this.route.snapshot.params['id'];

    this.bikeService
      .getById(this.bikeId)
      .pipe(tap((details) => {
        this.bikeService.getAuthor(details._acl.creator).subscribe((author) => {
          this.bike.author = author[0];
        });
      }))
      .subscribe((details) => {
        this.bike = details;
      });
  }

  rentBike(event: any) {
    console.log(event.target.id);
  }
}

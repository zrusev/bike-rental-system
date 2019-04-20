import { Component, OnInit } from '@angular/core';
import { IBike } from '../../shared/models/IBike';
import { BikeService } from 'src/app/core/services/bike.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {
  bike: IBike;
  bikeId: string;
  isRented: boolean = false;

  constructor(
    private bikeService: BikeService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
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
        this.isRented = details.isRented;
      });
  }

  rentBike(event: any) {
    const bikeId: string = event.target.id;
    const rentedBy: string = this.authService.userId;

    this.bikeService
      .getById(bikeId)
      .pipe(tap((bike) => {
        this.bikeService
          .editBike(bikeId, Object.assign(bike, {
            isRented: true,
            rentedBy
          }))
          .subscribe((details: any) => {
            this.toastr.success(`${details.name} rented successfully!`, 'Success');
            this.router.navigate([ '/bikes/all' ]);
          });
      }))
      .subscribe();
  }
}

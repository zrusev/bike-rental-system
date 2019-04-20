import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/core/services/bike.service';
import { Observable } from 'rxjs';
import { IBike } from 'src/app/components/shared/models/IBike';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike-delete',
  templateUrl: './bike-delete.component.html',
  styleUrls: ['./bike-delete.component.css']
})
export class BikeDeleteComponent implements OnInit {
  bikes$: Observable<IBike[]>;

  constructor(
    private bikeService: BikeService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.bikes$ = this.bikeService.getAll();
  }

  deleteBike(event: any) {
    const id = event.target.id;
    this.bikeService.deleteBike(id).subscribe((res: any) => {
      this.toastr.success(`${res.count} bike deleted successfully!`, 'Success');
      this.router.navigate([ '/bikes/all' ]);
    });
  }
}

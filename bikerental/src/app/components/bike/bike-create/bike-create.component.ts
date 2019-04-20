import { Component, OnInit,  DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BikeService } from 'src/app/core/services/bike.service';
import { ToastrService } from 'ngx-toastr';
import { ICoords } from '../../shared/models/ICoords';

@Component({
  selector: 'app-bike-create',
  templateUrl: './bike-create.component.html',
  styleUrls: ['./bike-create.component.css']
})
export class BikeCreateComponent implements OnInit, DoCheck {
  coordinates: ICoords = {lat: 42.6978634, lng: 23.3221789};
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bikeService: BikeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i)]],
      privacyLevel: ['', [Validators.required, Validators.pattern(/^(Public)|(Private)$/)]],
      latitude: ['', Validators.pattern(/^\d*\.?\d*$/)],
      longitude: ['', Validators.pattern(/^\d*\.?\d*$/)]
    });
  }

  ngDoCheck() {
    this.form.controls['latitude'].setValue(this.coordinates.lat);
    this.form.controls['longitude'].setValue(this.coordinates.lng);
  }

  onMarked(coords: ICoords) { this.coordinates = coords; }

  createBike() {
    this.bikeService
      .createBike(this.form.value)
      .subscribe(() => {
        this.toastr.success('Bike created successfully!', 'Success');
        this.router.navigate([ '/bikes/all' ]);
      });
  }

  get f() { return this.form.controls; }
}

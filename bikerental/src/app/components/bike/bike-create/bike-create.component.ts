import { Component, OnInit, Input } from '@angular/core';
import { ICoords } from '../../shared/models/ICoords';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bike-create',
  templateUrl: './bike-create.component.html',
  styleUrls: ['./bike-create.component.css']
})
export class BikeCreateComponent implements OnInit {
  coordinates: ICoords;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(10)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    imageUrl: ['', [Validators.required, Validators.pattern(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i)]],
    privacyLevel: ['', [Validators.required, Validators.pattern(/[Public|Private]/)]],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required]
    });
  }

  createBike() {
    console.log(this.form);
  }

  get f() { return this.form.controls; }

  get invalid() { return this.form.invalid; }

  onMarked(coords: ICoords) { this.coordinates = coords; }
}

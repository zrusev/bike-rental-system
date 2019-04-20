import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDeleteComponent } from './bike-delete.component';

describe('BikeDeleteComponent', () => {
  let component: BikeDeleteComponent;
  let fixture: ComponentFixture<BikeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

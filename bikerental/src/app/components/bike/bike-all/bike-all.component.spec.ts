import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeAllComponent } from './bike-all.component';

describe('BikeAllComponent', () => {
  let component: BikeAllComponent;
  let fixture: ComponentFixture<BikeAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

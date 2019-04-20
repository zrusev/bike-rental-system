import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeCardComponent } from './bike-card.component';

describe('BikeCardComponent', () => {
  let component: BikeCardComponent;
  let fixture: ComponentFixture<BikeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedForecastComponent } from './detailed-forecast.component';

describe('HourlyForecastComponent', () => {
  let component: DetailedForecastComponent;
  let fixture: ComponentFixture<DetailedForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

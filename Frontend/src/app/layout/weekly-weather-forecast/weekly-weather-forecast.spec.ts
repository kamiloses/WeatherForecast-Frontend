import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyWeatherForecast } from './weekly-weather-forecast';

describe('WeeklyWeatherForecast', () => {
  let component: WeeklyWeatherForecast;
  let fixture: ComponentFixture<WeeklyWeatherForecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyWeatherForecast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyWeatherForecast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

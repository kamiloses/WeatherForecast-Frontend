import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWeatherForecast } from './daily-weather-forecast';

describe('DailyWeatherForecast', () => {
  let component: DailyWeatherForecast;
  let fixture: ComponentFixture<DailyWeatherForecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyWeatherForecast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyWeatherForecast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

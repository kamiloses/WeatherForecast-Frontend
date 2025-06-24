import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DailyWeatherForecastModel} from './daily-model';

@Injectable({ providedIn: 'root' })
export class DailyWeatherResolver implements Resolve<DailyWeatherForecastModel> {
  constructor(private http: HttpClient) {}

  resolve(): Observable<DailyWeatherForecastModel> {
    return this.http.get<DailyWeatherForecastModel>('http://localhost:8080/api/v1/weather/daily?longitude=30&latitude=30');
  }
}

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {WeeklyWeatherForecastModel} from './weekly-model';

@Injectable({ providedIn: 'root' })
export class WeeklyWeatherResolver implements Resolve<WeeklyWeatherForecastModel> {
  constructor(private http: HttpClient) {}

  resolve(): Observable<WeeklyWeatherForecastModel> {
    return this.http.get<WeeklyWeatherForecastModel>('http://localhost:8080/api/v1/weather/weekly?longitude=30&latitude=30');
  }
}

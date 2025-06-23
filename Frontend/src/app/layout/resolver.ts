// forecast.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DailyWeatherForecast} from '../model/daily-model';

@Injectable({ providedIn: 'root' })
export class ForecastResolver implements Resolve<DailyWeatherForecast> {
  constructor(private http: HttpClient) {}

  resolve(): Observable<DailyWeatherForecast> {
    return this.http.get<DailyWeatherForecast>('http://localhost:8080/hey');
  }
}

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {WeeklyWeatherForecast} from '../model/weekly-model';

@Injectable({ providedIn: 'root' })
export class ForecastResolverV2 implements Resolve<WeeklyWeatherForecast> {
  constructor(private http: HttpClient) {}

  resolve(): Observable<WeeklyWeatherForecast> {
    return this.http.get<WeeklyWeatherForecast>('http://localhost:8080/weatherApi/hey2');
  }
}

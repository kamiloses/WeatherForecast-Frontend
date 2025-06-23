// forecast.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyDto } from '../model/daily-model';
import {WeatherResponseDto} from '../model/weather-response';

@Injectable({ providedIn: 'root' })
export class ForecastResolver implements Resolve<WeatherResponseDto> {
  constructor(private http: HttpClient) {}

  resolve(): Observable<WeatherResponseDto> {
    return this.http.get<WeatherResponseDto>('http://localhost:8080/hey');
  }
}

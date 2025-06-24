import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DailyWeatherForecastModel} from './daily-model';

@Injectable({ providedIn: 'root' })
export class DailyWeatherResolver implements Resolve<DailyWeatherForecastModel> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<DailyWeatherForecastModel> {
    const lat = route.queryParamMap.get('latitude')??'30';
    const lng = route.queryParamMap.get('longitude')??'30';
    return this.http.get<DailyWeatherForecastModel>(`http://localhost:8080/api/v1/weather/daily?longitude=${lng}&latitude=${lat}`);
  }
}

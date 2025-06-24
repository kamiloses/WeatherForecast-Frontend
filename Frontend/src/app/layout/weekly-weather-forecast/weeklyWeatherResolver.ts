import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {WeeklyWeatherForecastModel} from './weekly-model';

@Injectable({ providedIn: 'root' })
export class WeeklyWeatherResolver implements Resolve<WeeklyWeatherForecastModel> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<WeeklyWeatherForecastModel> {
    const lat = route.queryParamMap.get('latitude')??'30';
    const lng = route.queryParamMap.get('longitude')??'30';
    return this.http.get<WeeklyWeatherForecastModel>(
      `http://localhost:8080/api/v1/weather/weekly?longitude=${lng}&latitude=${lat}`
    );
  }
}


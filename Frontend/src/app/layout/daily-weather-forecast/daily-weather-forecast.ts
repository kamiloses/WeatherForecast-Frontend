import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DailyWeatherForecastModel} from './daily-model';

@Component({
  selector: 'app-daily-weather-forecast',
  imports: [],
  templateUrl: './daily-weather-forecast.html',
  styleUrl: './daily-weather-forecast.css',
  standalone:true
})
export class DailyWeatherForecast  implements OnInit {

  dailyForecast!:DailyWeatherForecastModel;
  location: string = 'Cairo, Cairo Governorate, Egypt';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(
      data=>{
        this.dailyForecast=data["dailyWeather"];

      });

    this.route.queryParamMap.subscribe(params => {
      const loc = params.get('location');
      if (loc) {
        this.location = loc;
      }
    });
  }
  getWeatherIcon(code: number): string {
    if (code >= 0 && code <= 1) return '☀️';
    if (code === 2) return '🌤️';
    if (code === 3) return '☁️';
    if (code >= 45 && code <= 48) return '🌫️';
    if (code >= 51 && code <= 57) return '🌦️';
    if (code >= 61 && code <= 67) return '🌧️';
    if (code >= 71 && code <= 77) return '❄️';
    if (code >= 80 && code <= 82) return '🌧️';
    if (code >= 85 && code <= 86) return '🌨️';
    if (code === 95) return '⛈️';
    if (code === 96 || code === 99) return '🌩️';
    return '❓';
  }

}
{

}

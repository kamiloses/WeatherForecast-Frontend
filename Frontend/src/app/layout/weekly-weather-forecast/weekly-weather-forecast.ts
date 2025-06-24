import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeeklyWeatherForecastModel} from './weekly-model';

@Component({
  selector: 'app-weekly-weather-forecast',
  imports: [],
  templateUrl: './weekly-weather-forecast.html',
  styleUrl: './weekly-weather-forecast.css',
  standalone:true
})
export class WeeklyWeatherForecast implements OnInit {

  weeklyForecast!: WeeklyWeatherForecastModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit()
  {
    this.route.data.subscribe(
      data => {
        this.weeklyForecast = data["weeklyWeather"];
      })

  }
}

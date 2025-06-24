import {Component, OnInit} from '@angular/core';
import {LeafletMap} from './leaflet-map/leaflet-map';
import {DailyWeatherForecast} from './daily-weather-forecast/daily-weather-forecast';
import {WeeklyWeatherForecast} from './weekly-weather-forecast/weekly-weather-forecast';

@Component({
  selector: 'app-layout',
  imports: [
    LeafletMap,
    DailyWeatherForecast,
    WeeklyWeatherForecast
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone:true
})
export class Layout {


}

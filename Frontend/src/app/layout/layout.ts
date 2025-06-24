import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DailyWeatherForecast} from '../model/daily-model';
import {WeeklyWeatherForecast} from '../model/weekly-model';
import {LeafletMap} from '../leaflet-map/leaflet-map';

@Component({
  selector: 'app-layout',
  imports: [
    LeafletMap
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone:true
})
export class Layout implements OnInit {

  dailyForecast!:DailyWeatherForecast;
  weeklyForecast!:WeeklyWeatherForecast;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
     this.route.data.subscribe(
      data=>{
        this.dailyForecast=data["dailyWeather"];
         this.weeklyForecast=data["weeklyWeather"];
         console.log("HEJ"+this.weeklyForecast);

      })
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

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DailyDto} from '../model/daily-model';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherResponseDto} from '../model/weather-response';

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  standalone:true
})
export class Layout implements OnInit {

  weatherResponse!:WeatherResponseDto;


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
     this.route.data.subscribe(
      data=>{
        console.log("HEJ"+data["weatherResponse"])
        this.weatherResponse=data["weatherResponse"];
      })
}
}

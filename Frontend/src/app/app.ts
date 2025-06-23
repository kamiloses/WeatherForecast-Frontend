import { Component } from '@angular/core';
import {Layout} from './layout/layout';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Layout, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'WeatherForecastApp';
}

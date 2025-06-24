import { Routes } from '@angular/router';
import {Layout} from './layout/layout';
import {WeeklyWeatherResolver} from './layout/weekly-weather-forecast/weeklyWeatherResolver';
import {DailyWeatherResolver} from './layout/daily-weather-forecast/dailyWeatherResolver';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    resolve: { dailyWeather: DailyWeatherResolver,
              weeklyWeather:WeeklyWeatherResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange' //todo zapamiętaj
  }
];

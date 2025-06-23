import { Routes } from '@angular/router';
import {ForecastResolver} from './layout/resolver';
import {Layout} from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    resolve: { dailyWeather: ForecastResolver }
  }
];

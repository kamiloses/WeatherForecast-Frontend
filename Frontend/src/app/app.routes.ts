import { Routes } from '@angular/router';
import {Layout} from './layout/layout';
import {ForecastResolver} from './layout/resolver';
import {ForecastResolverV2} from './layout/resolver2';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    resolve: { dailyWeather: ForecastResolver,
              weeklyWeather:ForecastResolverV2
    }
  }
];

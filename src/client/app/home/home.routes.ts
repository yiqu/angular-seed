import { Route } from '@angular/router';
import { HomeComponent } from './index';

export const HomeRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  // if nothing is supplied after port number
  {
    path: '',
    redirectTo: 'status',
    pathMatch: 'full'
  }
];

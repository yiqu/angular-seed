import { Route } from '@angular/router';
import { StatusComponent } from './index';

export const StatusRoutes: Route[] = [
  {
    path: 'status',
    component: StatusComponent,
  },
  // Redirect a unknown path to Status page
  {
    path: '**',
    component: StatusComponent
  }
];

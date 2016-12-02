import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { StatusRoutes } from './status/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...StatusRoutes
];

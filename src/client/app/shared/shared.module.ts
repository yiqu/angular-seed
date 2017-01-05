import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { lastPingComponent} from './last-update/index';
import { fetchButtonComponent } from './fetch-button/index'

import { NameListService } from './name-list/index';
import { ServerStatusService } from './server-status/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent, lastPingComponent, fetchButtonComponent],
  exports: [ToolbarComponent, NavbarComponent, lastPingComponent, fetchButtonComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService, ServerStatusService, DatePipe]
    };
  }
}

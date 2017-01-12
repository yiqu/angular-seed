import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { fetchButtonComponent } from './fetch-button/index'
import { lastPingComponent} from './last-update/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';
import { ServerStatusService } from './server-status/index';
import { ToolbarComponent } from './toolbar/index';


/**
 * This file is the Shared Modules helper
 * 
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule.forRoot()],
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

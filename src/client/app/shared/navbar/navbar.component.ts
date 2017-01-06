import { Component, Input, OnChanges } from '@angular/core';
import { ServerStatusService } from '../server-status/index';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent { 
  notOperational: boolean;
  operationalMsg: string =  "Loading... Please wait.";
  serverError: boolean;

  /**
   * Creates an instance of the toolbar comp with the injected
   * ServerStatusService.
   */
  constructor(public serverStatusService: ServerStatusService) {
    this.serverStatusService.updateOperationalStatus.subscribe((inputValue:string) => {
      switch (inputValue) {
        case 'bad':
          this.notOperational = true;
          this.operationalMsg = 'One or more systems halted';
          break;
        case 'good':
          this.operationalMsg = 'All enabled systems operational';
          this.notOperational = false;  
          break;
        case 'error':
          this.operationalMsg = 'There is a problem with Heartbeat server';  
          this.notOperational = true; 
          break;
        default:
          this.operationalMsg = 'Loading...';
      }
    });
  }
}

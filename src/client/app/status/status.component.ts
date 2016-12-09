import { Component, OnInit } from '@angular/core';
import { ServerStatusService, LoadingIndicatorComponent, LoadingPage } from '../shared/index';
import { Observable } from 'rxjs/Rx';


/**
 * This class represents the lazy loaded statusComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-status',
  templateUrl: 'status.component.html',
  styleUrls: ['status.component.css'],
})
export class StatusComponent implements OnInit {

  errorMessage: string;
  status: any[] = [];
  lastPingeded: number = 0;
  clock: any;
  loaded: boolean;

  /**
   * Creates an instance of the HomeComponent with the injected
   * ServerStatusService.
   *
   * @param {ServerStatusService} serverStatusService - The injected ServerStatusService.
   */
  constructor(public serverStatusService: ServerStatusService) {

  }
  /**
   * Get the names OnInit
   */
  ngOnInit() {
    // Start spinner on init
    this.loaded = false;
    this.getAllStatus();
    this.initializePolling();
    this.clock = Observable
        .interval(1000)
        .map(()=> {
          return new Date()
        });
  }

  /**
   * Handle the serverStatusService observable
   */
  getAllStatus() {
    this.loaded = false;
    this.serverStatusService.get()
      .subscribe(
        data => {
          this.status = data
        },
        error => {
          // TODO: send a failure message to display.
          console.log('failure!');
          this.errorMessage = <any>error;
        },
        () => {
          // completed the call
          console.log('success!');
          this.loaded = true;
          this.lastPingeded = Date.now();
        }
      );
  }

  /**
   * Called on init to refresh the status every 5 mins.
   */
  initializePolling() {
    Observable.interval(120000)
      .subscribe(() => {
        this.getAllStatus();
      })
  }
}

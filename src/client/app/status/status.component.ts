import { Component, OnInit } from '@angular/core';
import { ServerStatusService, LoadingPage } from '../shared/index';
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
export class StatusComponent extends LoadingPage implements OnInit {

  errorMessage: string;
  clock: any;

  // array string to send to status-detail @input status 
  status: any[] = [];
  // boolean to send over to status-detail @input loadedInput
  loadedValue: boolean;
  // value to send over to fetch-button @input loadingMsg
  loadingMsgValue: string;

  /**
   * Creates an instance of the HomeComponent with the injected
   * ServerStatusService.
   *
   * @param {ServerStatusService} serverStatusService - The injected ServerStatusService.
   */
  constructor(public serverStatusService: ServerStatusService) {
    super(true);
  }
  /**
   * Get the names OnInit
   */
  ngOnInit() {
    // Start spinner on init
    this.loadedValue = false;
    this.getAllStatus();
    this.initializePolling();
    this.clock = Observable
        .interval(1000)
        .map(()=> {
          return new Date();
        });
  }

  /**
   * Handle the serverStatusService observable
   */
  getAllStatus() {
    this.loadedValue = false;
    this.loadingMsgValue = "Loading ...";
    this.serverStatusService.get()
      .subscribe(
        data => {
          this.status = data
        },
        error => {
          // TODO: send a failure message to display.
          console.log('failure!');
          this.loadingMsgValue = "Error occured: " + this.errorMessage;
          this.errorMessage = <any>error;
        },
        () => {
          // Completed the call
          console.log('success!');
          this.loadedValue = true;
          this.loadingMsgValue = "";
          // Update the time on top left (toolbar component)
          this.serverStatusService.updateFetchTime.next(true);
        }
      );
  }

  /**
   * Called on init to refresh the status every 5 mins.
   */
  initializePolling() {
    Observable.interval(60000)
      .subscribe(() => {
        this.getAllStatus();
      })
  }
}

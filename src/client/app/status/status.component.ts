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
    this.loadedValue = false;
    this.getAllStatus();

    // Only init polling if it has not already started
    if (this.serverStatusService.startedPolling == false) {
      this.initializePolling();
    }
    // Live clock 
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
          console.log('failure with last fetch.');
          // Update the navbar message, update the button back to Fetch, and display
          // error message next to button
          this.serverStatusService.updateOperationalStatus.next('error');
          this.loadingMsgValue = "Fetch";
          this.errorMessage = "Error occured with last fetch: " + <any>error;
        },
        () => {
          // Completed the call
          console.log('success!');
          this.errorMessage = "";
          this.loadedValue = true;
          this.loadingMsgValue = "Fetch";
          // Update the time on top left (toolbar component)
          this.serverStatusService.updateFetchTime.next(true);
          // Update the operational message in navbar comp.
          let result = JSON.stringify(this.status);
          this.calculateOperationalStatus(result);
        }
      );
  }

  /**
   * Called on init to refresh the status every 1 mins.
   */
  initializePolling() {
    this.serverStatusService.startedPolling = true;
    Observable.interval(60000)
      .subscribe(() => {
        this.getAllStatus();
      })
  }

  /**
   * Calculate if there are services halted, and update the Observable
   */
  calculateOperationalStatus(statusResult:string) {
    let pattern = /red/;
    let bad = pattern.test(statusResult);
    if (bad) {
      this.serverStatusService.updateOperationalStatus.next('bad');
    } else {
      this.serverStatusService.updateOperationalStatus.next('good');   
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ServerStatusService } from '../shared/index';
import { Observable } from 'rxjs/Rx';;

/**
 * This class represents the lazy loaded statusComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-status',
  templateUrl: 'status.component.html',
  styleUrls: ['status.component.css']
})
export class StatusComponent implements OnInit {

  errorMessage: string;
  status: any[] = [];
  lastPinged: number = 0;
  clock: any;

  /**
   * Creates an instance of the HomeComponent with the injected
   * ServerStatusService.
   *
   * @param {ServerStatusService} serverStatusService - The injected ServerStatusService.
   */
  constructor(public serverStatusService: ServerStatusService) {}
  /**
   * Get the names OnInit
   */
  ngOnInit() {
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
    this.lastPinged = Date.now();
    this.serverStatusService.get()
      .subscribe(
        data => {
          return this.status = data
        },
        error => this.errorMessage = <any>error,
        () => {
          // completed the call
          console.log('From inits getAllStatus ' + this.status)
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
        this.lastPinged = Date.now();
      })
  }

}

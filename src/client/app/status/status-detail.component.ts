import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { ServerStatusService, LoadingPage } from '../shared/index';

/**
 * This class represents the ping button component
 */
@Component({
    moduleId: module.id,
    selector: 'status-detail',
    styleUrls: ['status-detail.component.css'],
    template: `
    <div [ngClass]="'server-report'">
        <div [ngSwitch]="loading">
            <div *ngSwitchCase="false">
                <table>
                    <tr class='tr-headers'>
                        <th>Service Name</th>
                        <th>Status</th>
                    </tr>
                        <tr *ngFor="let stat of status">
                        <th [ngClass]="stat?.status === null ? 'status-none': 'status-'+stat?.status">{{stat?.name | uppercase}} ({{stat?.enabled | enabled}})</th>
                        <th [ngClass]="stat?.status === null ? 'status-none': 'status-'+stat?.status">{{stat?.status | status}}</th>
                    </tr>
                </table>
            </div>
            <div *ngSwitchCase="true">
                <loading-indicator></loading-indicator>
            </div>
        </div>
    </div>
    `
})
export class StatusDetailComponent extends LoadingPage implements OnChanges {
    @Input() status: any[];
    @Input() loadedInput: boolean;

  /**
   * Creates an instance of the HomeComponent with the injected
   * ServerStatusService.
   *
   * @param {ServerStatusService} serverStatusService - The injected ServerStatusService.
   */
    constructor() {
        super(true);
    }

    ngOnChanges() {
        // Load mask depending on loaded
        if(this.loadedInput) {
            this.ready();
        } else {
            this.standby();
        }   
    } 

}
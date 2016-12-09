import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { ServerStatusService, LoadingPage } from '../shared/index';

/**
 * This class represents the ping button component
 */
@Component({
    moduleId: module.id,
    selector: 'status-detail',
    styleUrls: ['ping.component.css'],
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
export class PingComponent extends LoadingPage implements OnChanges {
    @Input() status: any[];
    @Input() lastPinged: number;
    @Input() loaded: boolean;

  /**
   * Creates an instance of the HomeComponent with the injected
   * ServerStatusService.
   *
   * @param {ServerStatusService} serverStatusService - The injected ServerStatusService.
   */
    constructor(public serverStatusService: ServerStatusService) {
        super(true);
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        // Load mask depending on loaded
        if(this.loaded) {
            this.ready();
        } else {
            this.standby();
        }   
    } 

}

@Component({
    moduleId: module.id,
    selector: 'last-ping',
    styleUrls: ['ping.component.css'],
    template: `Last successful ping: {{lastPinged | date:'jms'}} on {{lastPinged | date:'yMd'}}`
})
export class lastPingComponent implements OnChanges {
    @Input() lastPinged: number;

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        //console.log('changes!!' + JSON.stringify(changes));    
    } 
}
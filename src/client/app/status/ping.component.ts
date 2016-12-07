import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { ServerStatusService } from '../shared/index';


/**
 * This class represents the ping button component
 */
@Component({
    moduleId: module.id,
    selector: 'status-detail',
    styleUrls: ['ping.component.css'],
    template: `
    <div [ngClass]="'server-report'">
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
    `
})
export class PingComponent implements OnChanges {
    @Input() status: any[];
    @Input() lastPinged: number;

  /**
   * Creates an instance of the HomeComponent with the injected
   * ServerStatusService.
   *
   * @param {ServerStatusService} serverStatusService - The injected ServerStatusService.
   */
    constructor(public serverStatusService: ServerStatusService) {}

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        //console.log('changes!!' + JSON.stringify(changes)); 
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

    ngDoCheck() {
        //console.log("in do check: " + this.lastPinged);
    }
}
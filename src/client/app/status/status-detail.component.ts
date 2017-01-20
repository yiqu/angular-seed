import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { ServerStatusService, LoadingPage } from '../shared/index';

/**
 * This class represents the status detail comp. that display the status table
 */
@Component({
    moduleId: module.id,
    selector: 'status-detail',
    styleUrls: ['status-detail.component.css'],
    template: `
    <md-list [ngClass]="loading == true ? 'server-report-loading': 'server-report'">
        <h3 md-subheader class="service-title">{{internalService | uppercase}}</h3>
        <ng-container *ngFor="let stat of status">
            <md-list-item *ngIf="stat?.service==='internal'">
                <md-icon md-list-avatar [mdTooltip]="stat?.status === null ? nullStatus : stat?.status === 'red' ? redStatus : stat?.status === 'yellow' ? yellowStatus : greenStatus"
                    [ngClass]="stat?.status === null ? 'status-none':'status-'+stat?.status">
                        {{stat?.status === 'red' ? 'thumb_down' : 'thumb_up'}}
                </md-icon>
                <h4 md-line>{{stat?.name | uppercase}}</h4>
                <p md-line [ngClass]="stat?.enabled ? 'status-green' : 'status-disabled'">{{stat?.enabled | enabled}}</p>
            </md-list-item>
        </ng-container>
        
        <h3 md-subheader class="service-title">{{externalService | uppercase}}</h3>
        <ng-container *ngFor="let stat of status">
            <md-list-item *ngIf="stat?.service==='external'">
                <md-icon md-list-avatar [mdTooltip]="stat?.status === null ? nullStatus : stat?.status === 'red' ? redStatus : stat?.status === 'yellow' ? yellowStatus : greenStatus"
                    [ngClass]="stat?.status === null ? 'status-none': 'status-'+stat?.status">
                        {{stat?.status === 'red' ? 'thumb_down' : 'thumb_up'}}
                </md-icon>
                <h4 md-line>{{stat?.name | uppercase}}</h4>
                <p md-line [ngClass]="stat?.enabled ? 'status-green' : 'status-disabled'">{{stat?.enabled | enabled}}</p>
            </md-list-item>
        </ng-container>
        
        <h3 md-subheader class="service-title">{{databaseService | uppercase}}</h3>
        <ng-container *ngFor="let stat of status">
            <md-list-item *ngIf="stat?.service==='database'">
                <md-icon md-list-avatar [mdTooltip]="stat?.status === null ? nullStatus : stat?.status === 'red' ? redStatus : stat?.status === 'yellow' ? yellowStatus : greenStatus"
                    [ngClass]="stat?.status === null ? 'status-none': 'status-'+stat?.status">
                        {{stat?.status === 'red' ? 'thumb_down' : 'thumb_up'}}
                </md-icon>
                <h4 md-line>{{stat?.name | uppercase}}</h4>
                <p md-line [ngClass]="stat?.enabled ? 'status-green' : 'status-disabled'">{{stat?.enabled | enabled}}</p>
            </md-list-item>
        </ng-container>    
    </md-list>
    `
})
export class StatusDetailComponent extends LoadingPage implements OnChanges {
    @Input() status: any[];
    @Input() loadedInput: boolean;
    fat:boolean = false;

    private internalService:string = "Internal Services";
    private externalService:string = "External Services";
    private databaseService:string = "Database";

    private greenStatus:string = "Running normally";
    private yellowStatus:string = "Running slower than normal";
    private redStatus:string = "Service halted";
    private nullStatus:string = "Service disabled";
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
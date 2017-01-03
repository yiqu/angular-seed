import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

/**
 * Last ping component that shows the last time fetch was made 
 */

@Component({
    moduleId: module.id,
    selector: 'last-ping',
    styleUrls: ['ping.component.css'],
    template: `{{datePrefix}} {{dateDisplay}}, {{lastPingInput | date:'jms'}}`
})
export class lastPingComponent implements OnChanges{
    @Input() lastPingInput: number;
    private dateDisplay: string = 'unknown';
    private datePrefix = 'Last updated';

    ngOnChanges() {
        let currentDate = new Date(Date.now());
        if (this.lastPingInput !== null && new Date(this.lastPingInput).getDate() === currentDate.getDate()){
            this.dateDisplay = 'today';
        } else {
            this.dateDisplay = new Date(this.lastPingInput).getDate().toString();
        }
    }
}
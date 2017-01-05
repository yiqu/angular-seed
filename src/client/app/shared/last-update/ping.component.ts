import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { DatePipe } from '@angular/common';
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
    private dateDisplay: any = 0;
    private datePrefix = 'Last updated';
    private useDate: boolean = false;

    constructor(private datePipe: DatePipe) {

    }
    ngOnChanges() {
        let currentDate = new Date(Date.now());
        if (this.lastPingInput !== null && new Date(this.lastPingInput).getDate() === currentDate.getDate()){
            this.dateDisplay = 'today';
        } else {
            console.log(this.dateDisplay);
            this.dateDisplay = this.datePipe.transform(this.lastPingInput, 'yMd');
        }
    }
}
import {Component} from '@angular/core';

export class LoadingPage {

    public loading: boolean;

    constructor(val: boolean) {
        this.loading = val;
    }
    standby() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
}

@Component({
    moduleId: module.id,
    selector: 'loading-indicator',
    template: '<div class="loader"></div>',
    styleUrls: ['load-indicator.component.css'],
})
export class LoadingIndicatorComponent {}
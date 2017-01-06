import {Component} from '@angular/core';

/*
 * Class used to indicate if a page is in loading state
 */
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
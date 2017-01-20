import { Component, Input } from '@angular/core';
import { ServerStatusService } from '../server-status/index';

/**
 * Fetch button component
 */

@Component({
    moduleId: module.id,
    selector: 'fetch-button',
    styleUrls: ['fetch-button.component.css'],
    templateUrl: 'fetch-button.component.html'
})
export class fetchButtonComponent {
    @Input() loadingMsgInput: string;
    @Input() errorLoadMsgInput: string;

    private fetchButtonTooltip: string = "Fetch latest status";
}
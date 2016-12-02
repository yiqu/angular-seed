import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import { PingComponent, lastPingComponent } from './ping.component';
import { ServerStatusService } from '../shared/index';
import { EnabledPipe } from '../shared/pipes/server-enabled.pipe';
import { StatusPipe } from '../shared/pipes/server-status.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [StatusComponent, PingComponent, lastPingComponent, EnabledPipe, StatusPipe],
    exports: [StatusComponent, PingComponent] 
})

export class StatusModule { }

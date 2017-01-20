import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StatusComponent } from './status.component';
import { StatusDetailComponent } from './status-detail.component';

import { EnabledPipe } from '../shared/pipes/server-enabled.pipe';
import { StatusPipe } from '../shared/pipes/server-status.pipe';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, SharedModule, MaterialModule.forRoot()],
    declarations: [StatusComponent, StatusDetailComponent, 
    EnabledPipe, StatusPipe],
    exports: [StatusComponent] 
})

export class StatusModule { }

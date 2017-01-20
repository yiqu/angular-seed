import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, MaterialModule.forRoot(),],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})

export class AboutModule { }

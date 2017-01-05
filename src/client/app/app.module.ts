import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { StatusModule } from './status/status.module';

@NgModule({
  // in forRoot use , {useHash: true} for hash
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes,{ useHash: true }), 
  AboutModule, HomeModule, SharedModule.forRoot(), StatusModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>' //possibly change this to fix routing hash value
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }

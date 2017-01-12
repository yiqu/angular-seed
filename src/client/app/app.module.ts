import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { StatusModule } from './status/status.module';

@NgModule({
  /* Notes:
  * 1) For routing with hashtags in URL,  forRoot use , {useHash: true}
    2) The BrowserModule, the module every browser app must import.
    3) The declarations list identifies the application's only component, 
       the root component, the top of this app's, which is sd-app.
    4) bootstrap property identifies this AppComponent as the bootstrap component. 
       When Angular launches the app, it places the HTML rendering of AppComponent in the DOM, 
       inside the <my-app> element tags of the index.html
  */
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes,{useHash: true}), MaterialModule.forRoot(), 
  AboutModule, HomeModule, SharedModule.forRoot(), StatusModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>' // currently set as '/'
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }

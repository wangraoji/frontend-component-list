import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
// import { PagesComponent } from './pages/pages.component';

// import { collection } from './pages/validation';
// import {TestModule} from 'wangrj-hs-text-lib';
@NgModule({
  declarations: [
    AppComponent,
    // ...collection,
    // PagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // TestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

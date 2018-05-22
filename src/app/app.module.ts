import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
// import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    // PagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

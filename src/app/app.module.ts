import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';

import { CommonService } from './common.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { FirstTableComponent } from './components/firstTable/firstTable.component';
import { FirstTreeComponent } from './components/firstTree/firstTree.component';
import { FirstSelectComponent } from './components/firstSelect/firstSelect.component';
import { PfComponent } from './components/primeNgAndfirstTable/PF.component';
import { PrimengComponent } from './components/primeng/primeng.component';
import { CommonDocComponent } from './components/commonDoc/commonDoc.component';
import { TechniquesComponent } from './components/commonDoc/components/techniques/techniques.component';
import { WorkProcessComponent } from './components/commonDoc/components/work-process/work-process.component';
import { Angular2DocComponent } from './components/commonDoc/components/angular2-doc/angular2-doc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstTableComponent,
    FirstTreeComponent,
    FirstSelectComponent,
    PfComponent,
    PrimengComponent,
    CommonDocComponent,
    TechniquesComponent,
    WorkProcessComponent,
    Angular2DocComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [ CommonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

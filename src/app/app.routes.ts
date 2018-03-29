import { Routes } from '@angular/router';

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

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'firstTable',
    component: FirstTableComponent,
  },
  {
    path: 'firstTree',
    component: FirstTreeComponent,
  },
  {
    path: 'firstSelect',
    component: FirstSelectComponent,
  },
  {
    path: 'primeNg',
    component: PrimengComponent,
  },
  {
    path: 'primeNgAndfirstTable',
    component: PfComponent,
  },
  {
    path: 'commonDoc',
    component: CommonDocComponent,
    children: [
      {
        path: '',
        redirectTo: 'workProcess',
        pathMatch: 'full',
      },
      {
        path: 'workProcess',
        component: WorkProcessComponent,
      },
      {
        path: 'commonTechniques',
        component: TechniquesComponent,
      },
      {
        path: 'angular2Doc',
        component: Angular2DocComponent,
      },
    ],
  },
];

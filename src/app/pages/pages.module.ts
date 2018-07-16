import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { routedComponents, primengModules } from './pages.setting';

import { collection } from './validation';

import { PaginatorComponent } from './paginator';

// import {
//     OnlyDateModule
// } from '@jinscop/ngx-validation/OnlyDate';
import {TestModule} from 'wangrj-hs-text-lib';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PagesRoutingModule,
        // --> primeng
        primengModules,
        // OnlyDateModule,
        TestModule,
    ],
    declarations: [
        ...routedComponents,
        ...collection,
        PaginatorComponent,
    ],
})
export class PagesModule {
}


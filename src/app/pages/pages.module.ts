import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { routedComponents, primengModules } from './pages.setting';

import { collection } from './validation';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PagesRoutingModule,
        // --> primeng
        primengModules,
    ],
    declarations: [
        ...routedComponents,
        ...collection,
    ],
})
export class PagesModule {
}


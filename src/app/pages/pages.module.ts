import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { routedComponents,primengModules } from './pages.setting';


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
    ],
})
export class PagesModule {
}


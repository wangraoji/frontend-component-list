import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ROUTES } from './pages.setting';
import { PagesComponent } from './pages.component';

const routes: Routes = ROUTES;


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}

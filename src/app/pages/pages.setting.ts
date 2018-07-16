
// ----------> 路由配置
import { PagesComponent } from './pages.component';

import {
    // --> 首页
    HomeComponent,
    // --> firstTable
    FirstTableComponent,
    // --> firstTree
    FirstTreeComponent,
    // --> 验证库
    ValidatorComponent,
    // --> 分页组件
    PaginatorDemoComponent,
    // --> 前端帮助库
    CommonDocComponent,
    WorkProcessComponent,
    TechniquesComponent,
    Angular2DocComponent,
    // --> PVM_A1模板
    Pvma1Component,
    PrimengTreeComponent,
    // --> pvmc的创建和pvm的使用
    PvmcComponent,
    // --> pvmList 文档
    PvmListComponent,
    // --> indexDB 文档
    IndexDBDocComponent,
    // --> TechnologyInfo 技术情报
    TechnologyInfoComponent,
} from './components';

export const ROUTES = [{
    path: '',
    component: PagesComponent,
    children: [
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
            path: 'validator',
            component: ValidatorComponent,
        },
        {
            path: 'paginator',
            component: PaginatorDemoComponent,
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
        {
            path: 'pvmc',
            component: PvmcComponent,
        },
        {
            path: 'pvmList',
            component: PvmListComponent,
        },
        {
            path: 'indexDB-Doc',
            component: IndexDBDocComponent,
        },
        {
            path: 'technologyInfo',
            component: TechnologyInfoComponent,
        },
    ],
}];

export const routedComponents = [
    PagesComponent,
    // --> 首页
    HomeComponent,
    // --> firstTable
    FirstTableComponent,
    // --> firstTree
    FirstTreeComponent,
    // --> 验证库
    ValidatorComponent,
    // --> 分页组件
    PaginatorDemoComponent,
    // --> 前端帮助库
    CommonDocComponent,
    WorkProcessComponent,
    TechniquesComponent,
    Angular2DocComponent,
    // --> PVM_A1模板
    Pvma1Component,
    PrimengTreeComponent,
    // --> pvmc的创建和pvm的使用
    PvmcComponent,
    // --> pvmList 文档
    PvmListComponent,
    // --> indexDB 文档
    IndexDBDocComponent,
    // --> TechnologyInfo 技术情报
    TechnologyInfoComponent,
];

// ----------> primeng
import { CardModule } from 'primeng/card';
import { TreeModule } from 'primeng/tree';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
export const primengModules = [
    // --> Card
    CardModule,
    // --> tree
    TreeModule,
    // --> InputTextarea
    InputTextareaModule,
    // --> button
    ButtonModule,
    // --> table
    TableModule,
    // --> 右键事件
    ContextMenuModule,
    // --> panel
    PanelModule,
    // --> 弹出框
    DialogModule,
    // --> 录入框
    InputTextModule,
];
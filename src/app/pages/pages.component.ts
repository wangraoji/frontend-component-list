import { Component } from '@angular/core';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
    layoutMenuData: any = [
        { title: "首页", icon: "fa fa-home", href: "/pages/home" },
        { title: "firstTable", icon: "fa fa-table", href: "/pages/firstTable" },
        { title: "firstTree", icon: "fa fa-tree", href: "/pages/firstTree" },
        { title: "primeng（主用）", icon: "fa fa-table", href: "https://www.primefaces.org/primeng/", link: true },
        { title: "commonDoc（前端帮助库）", icon: "fa fa-tree", href: "/pages/commonDoc" },
        { title: "表单验证", icon: "fa fa-tree", href: "/pages/validator" },
        { title: "PVMC使用教程", icon: "fa fa-tree", href: "/pages/pvmc" },
        { title: "pvmList使用文档", icon: "fa fa-tree", href: "/pages/pvmList" },
    ];
}

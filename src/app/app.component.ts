import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  layoutMenuData: any = [
    { title: "首页", icon: "fa fa-home", href: "/home" },
    { title: "firstTable", icon: "fa fa-table", href: "/firstTable" },
    // { title: "primeNg （ui/控件 库）", icon: "fa fa-table", href: "/primeNg" },
    // { title: "primeNg和firstTable对比", icon: "fa fa-columns", href: "/primeNgAndfirstTable" },
    // { title: "firstSelect", icon: "fa fa-caret-square-o-down", href: "/firstSelect" },
    { title: "firstTree", icon: "fa fa-tree", href: "/firstTree" },
    { title: "primeng（主用）", icon: "fa fa-table", href: "https://www.primefaces.org/primeng/", link: true },
    { title: "commonDoc（前端帮助库）", icon: "fa fa-tree", href: "/commonDoc" },
    { title: "表单验证", icon: "fa fa-tree", href: "/validator" },

  ];

  ngOnInit() {

  }

}

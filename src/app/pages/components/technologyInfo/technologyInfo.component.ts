import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologyInfo',
  templateUrl: './technologyInfo.component.html',
  styleUrls: ['./technologyInfo.component.css']
})
export class TechnologyInfoComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit() {
    this.data = [
      {
        name: "BeyoundAdmin",
        link: "http://www.yidt.cn",
        thirdName: "jQuery，bootstrap",
        merit: "",
        fault: "",
        maintain: "铧盛王博",
        maintainLink: "",
        openSource: "",
      },
      {
        name: "hplus",
        link: "http://www.zi-han.net/theme/hplus/",
        thirdName: "jQuery，bootstrap",
        merit: "",
        fault: "",
        maintain: "铧盛王博",
        maintainLink: "",
        openSource: "false",
      },
      {
        name: "Admui",
        link: "http://www.admui.com/?form=hplus",
        thirdName: "jQuery，bootstrap",
        merit: "",
        fault: "",
        maintain: "铧盛王博",
        maintainLink: "",
        openSource: "false",
      },
      {
        name: "ngx-admin",
        link: "http://akveo.com/ngx-admin/#/pages/dashboard",
        thirdName: "angular2,bootstrap",
        merit: "",
        fault: "",
        maintain: "铧盛王博",
        maintainLink: "https://github.com/akveo/ngx-admin",
        openSource: "true",
      },
      {
        name: "H-ui.admin",
        link: "http://www.h-ui.net/H-ui.admin.shtml",
        thirdName: "jquery，layer",
        merit: "",
        fault: "",
        maintain: "铧盛王博",
        maintainLink: "",
        openSource: "true",
      },
      {
        name: "iview-admin",
        link: "https://iview.github.io/iview-admin/#/home",
        thirdName: "vue，iview",
        merit: "",
        fault: "",
        maintain: "铧盛王博",
        maintainLink: "https://github.com/iview/iview-admin",
        openSource: "true",
      },
      {
        name: "x-admin",
        link: "http://x.xuebingsi.com/x-admin/v2.0/index.html",
        thirdName: "jQuery，layui",
        merit: "",
        fault: "",
        maintain: "大牛学院",
        maintainLink: "https://gitee.com/daniuit/X-admin",
        openSource: "",
      },
      {
        name: "AdminLTE",
        link: "https://adminlte.io/themes/AdminLTE/index.html",
        thirdName: "jQuery，bootstrap",
        merit: "",
        fault: "",
        maintain: "铧盛王博",
        maintainLink: "",
        openSource: "true",
      },
      
    ];
  }

}

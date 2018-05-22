import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'commonDoc',
  templateUrl: './commonDoc.component.html',
  styleUrls: ['./commonDoc.component.scss']
})
export class CommonDocComponent implements OnInit {
  headDatas: any;
  parameter: any = "workProcess";

  constructor() { }

  ngOnInit() {
    this.headDatas = [
      { title: "工作流程", parameter: "/pages/commonDoc/workProcess" },
      { title: "常用技巧", parameter: "/pages/commonDoc/commonTechniques" },
      { title: "angular2Doc", parameter: "/pages/commonDoc/angular2Doc" },
      { title: "loadsh", parameter: "loadsh", outLink: "https://www.lodashjs.com/docs/4.17.5.html" },
    ]
  }

  headClick(e: any) {
    if (e.outLink) {
      window.open(e.outLink);
    } else {
      this.getData(e.parameter)
    }

  }

  getData(parameter) {
    location.href = `/pages/commonDoc/${parameter}`;
  }
}

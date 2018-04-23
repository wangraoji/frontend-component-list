import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
@Component({
  selector: 'commonDoc',
  templateUrl: './commonDoc.component.html',
  styleUrls: ['./commonDoc.component.scss']
})
export class CommonDocComponent implements OnInit {
  headDatas: any;
  parameter: any = "workProcess";
  
  constructor(private srv: CommonService) { }

  ngOnInit() {
    this.srv.getHeadDatas().then(res => {
      this.headDatas = res.headDatas;
    });
  }

  headClick(e: any) {
    if(e.outLink){
      window.open(e.outLink);
    }else {
      this.getData(e.parameter)
    }

  }

  getData(parameter) {
    this.srv.getData(parameter).then(res => {
      location.href = `./#/commonDoc/${res.path}`;
    });
  }
}

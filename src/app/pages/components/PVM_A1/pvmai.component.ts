import { Component, OnInit } from '@angular/core';
import { metaData, showmetaData, metaDateDetail } from './metaSetiing';


@Component({
  selector: 'PVM_A1',
  templateUrl: './pvma1.component.html',
  styleUrls: ['./pvma1.component.scss'],
})
export class Pvma1Component {
  // --> 演示Code
  showCode: string = showmetaData;
  // --> 元数据说明
  metaDateDetail: any = metaDateDetail;
  // --> 测试Code
  testCode: any;
  // --> 元数据
  metaData: any = metaData;
  constructor() { };
  ngOnInit() {
    console.log(this.metaData);
  }

  // --> 提交测试代码
  submitCode() {
    // console.log(this.testCode);
    if (this.testCode.indexOf('//') !== -1) {
      alert(`注释没删掉`);
      return false;
    };
    try {
      let jsonStr = JSON.parse(this.testCode);
      this.metaData.treeData = jsonStr.metaData.treeData;
      window.location.hash = '';
      window.location.hash = 'demo';
      return true;
    } catch {
      alert(`不符合JSON格式，看看是不是少了“” 或者结尾多了，`);
      return false;
    };
  }

  // --> tree选中 && 取消选中
  nodeSelect(e) {
    console.log(e);
  }
  nodeUnselect(e) {
    console.log(e);
  }


  
}

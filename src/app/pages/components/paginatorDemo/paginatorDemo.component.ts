import { Component } from '@angular/core';

@Component({
  selector: 'app-paginatorDemo',
  templateUrl: './paginatorDemo.component.html',
  styleUrls: ['./paginatorDemo.component.scss']
})
export class PaginatorDemoComponent {
  dec1:string = `1. npm install --save @ngx-app-frame/domain`
  dec2:string = `2. import { AFPaginatorModule } from '@ngx-app-frame/domain';`;
  dec3:string = `3. 把 AFPaginatorModule 加入到你 module 里的 imports imports: [AFPaginatorModule]。`;
  data: any;
  selectedData: any;
  singleSelectedData: any;

  // 数据总条数
  totalRecords: any = 14;

  resData: any;

  consolelog: any;
  tishi: any;

  decData: any;
  constructor() { }

  ngOnInit() {
    this.decData = [
      { inputOutput: "input", name: "totalRecords", type: "number", dec: "数据总条数", res: "null" },
      { inputOutput: "input", name: "paginatorStyle", type: "object", dec: "标签样式", res: "null" },
      { inputOutput: "input", name: "selectedData", type: "object or array", dec: "选中的数据", res: "null" },
      { inputOutput: "input", name: "rowsPerPageOptions", type: "array", dec: "下拉框的数据", res: "null" },
      { inputOutput: "output", name: "onPageChange", type: "Function", dec: "分页切换事件", res: "返回：当前页，总页数，每页多少条" },
    ];


 
    this.resData = [
      { name: "刘一", age: "001", bumen: "生产部" },
      { name: "刘二", age: "002", bumen: "研发部" },
      { name: "张三", age: "003", bumen: "生产部" },
      { name: "李四", age: "004", bumen: "研发部" },
      { name: "王五", age: "005", bumen: "销售部" },
      { name: "赵六", age: "006", bumen: "技术部" },
      { name: "张七", age: "007", bumen: "生产部" },
      { name: "李八", age: "008", bumen: "研发部" },
      { name: "王九", age: "009", bumen: "销售部" },
      { name: "赵十", age: "010", bumen: "技术部" },
      { name: "张十一", age: "011", bumen: "生产部" },
      { name: "李十二", age: "012", bumen: "研发部" },
      { name: "王十三", age: "013", bumen: "销售部" },
      { name: "赵十四", age: "014", bumen: "技术部" },
    ];

    this.data = this.resData.slice(0, 5);
  }

  onRowSelect(e) {
    // console.log(this.selectedData);
  }

  onPageChange(e) {
    // this.consolelog = JSON.string
    this.consolelog = JSON.stringify(e);
    this.tishi = e;
    this.data = this.resData.slice((e.currentPage - 1) * e.pageRows, e.currentPage * e.pageRows);
  }

}

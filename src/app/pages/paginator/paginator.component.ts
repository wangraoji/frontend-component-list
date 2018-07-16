import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'paginator',
  template: `
  <div class="paginatorBox" [ngStyle]="paginatorStyle">
    <div class="currentRow">
        当前选中 {{ currentRow }} 行数据
    </div>
    <div class="currentPages">
        第 <input type="text" class="currentPages-input" [(ngModel)]="currentPages" (keydown)="pageInputkeydown($event)" (keyup)="pageInputkeyup($event)"> 页/ {{totalPages}} 页
    </div>
    <div class="paginator">
        <a *ngFor="let page of paginatorData" [ngClass]="{'pageDisable':page.pageDisable}" (click)="onPageClick(page)">
            <span [class]="page.icon"></span>
        </a>
    </div>
    <div class="totalRecords">
        每页显示
        <select class="currentPages-select" [(ngModel)]="currentPagesSelect" (change)="selectFn()">
            <option *ngFor="let option of rowsPerPageOptions" [value]="option">{{ option }}</option>
        </select> 行 / 共 {{ totalRow }} 行
    </div>
      <br style="clear:both;">
  </div>
  `,
  styles: [`
  .paginatorBox {
    padding: .25em .5em;
    border: 1px solid #d5d5d5;
  }
  .currentRow {
    width: 20%;
    float: left;
    text-align: center;
  }  
  .currentPages {
    width: 20%;
    float: left;
    text-align: center;
  }
  .currentPages-input {
    border: 1px solid #d5d5d5;
    padding: 0 5px;
    border-radius: 2px;
    outline: none;
    position: relative;
    top: -1.5px;
    width: 2rem;
    text-align: center;
  }
  .paginator {
    width: 30%;
    float: left;
    text-align: center;
  }
  .paginator a {
    color: #000;
    border: 1px solid #d5d5d5;
    border-radius: 2px;
    margin-right: 10px;
    padding: 1px 6px;
    font-size: 12px;
    cursor: pointer;
  }
  .paginator a.pageDisable{
    opacity: 0.3;
    cursor: default;
  }
  .totalRecords {
    width: 30%;
    float: right;
    text-align: center;
  }
  .currentPages-select {
    border: 1px solid #d5d5d5;
    padding: 0 5px;
    border-radius: 2px;
    outline: none;
    position: relative;
    top: -1.5px;
    text-align: center;
  }
  `],
})
export class PaginatorComponent {

  // 组件样式 ==> 用来外部添加样式
  @Input() paginatorStyle: any;
  // 选中数据 ==> 用来判断多少行
  @Input() selectedData: any;
  // 数据总条数 ==> 用来显示数据总过有多少页
  @Input() totalRecords: any;
  // select数组 用来展示每页默认多少条
  @Input() rowsPerPageOptions: any;
  // 分页点击事件
  @Output() onPageChange = new EventEmitter<any>();

  // 当前选中了多少行
  currentRow: number = 0;

  // 当前总页数  - 传进来的多少总条数 / 传进来下拉框的值
  totalPages: number;

  // 共多少行 - 传进来的总条数
  totalRow: number;

  // 当前第几页
  currentPages: number = 1;

  // 默认展示下拉框第一条
  currentPagesSelect: any;

  // 临时储存页数，方便输入跳转
  tempPage: any = 1;

  paginatorData: any = [
    { icon: "fa fa-step-backward", pageDisable: true, value: "firstPage" },
    { icon: "fa fa-backward", pageDisable: true, value: "prePage" },
    { icon: "fa fa-forward", pageDisable: false, value: "nextPage" },
    { icon: "fa fa-step-forward", pageDisable: false, value: "lastPage" },
  ];

  constructor() { }

  ngOnInit() {
    if (this.rowsPerPageOptions) {
      if (!this.totalRecords) {
        this.totalRecords = 0;
      }
      this.currentPagesSelect = this.rowsPerPageOptions[0];
      this.totalRow = this.totalRecords * 1;
      this.totalPages = Math.ceil(this.totalRecords * 1 / this.currentPagesSelect);
      this.onPageChange.emit({
        currentPage: this.tempPage,
        pageCount: this.totalPages,
        pageRows: this.currentPagesSelect,
      });
    }
  }

  ngOnChanges() {
    if (this.totalRecords) {
      this.totalRow = this.totalRecords * 1;
      this.totalPages = Math.ceil(this.totalRecords * 1 / this.currentPagesSelect);
      if (this.tempPage > this.totalPages) {
        this.tempPage = this.currentPages = this.totalPages;
      }
      this.onPageClickFn(this.paginatorData);
    }
    if (this.selectedData) {
      if (Array.isArray(this.selectedData)) {
        this.currentRow = this.selectedData.length;
      } else {
        this.currentRow = 1;
      }
    } else {
      this.currentRow = 0;
    }
  }


  // 下拉框
  selectFn() {
    this.currentPagesSelect = this.currentPagesSelect * 1;
    this.totalPages = Math.ceil(this.totalRecords * 1 / this.currentPagesSelect);
    if (this.tempPage >= this.totalPages) {
      this.tempPage = this.currentPages = 1;
    }
    this.onPageChange.emit({
      currentPage: this.tempPage,
      pageCount: this.totalPages,
      pageRows: this.currentPagesSelect,
    });
    this.onPageClickFn(this.paginatorData);
  }

  // 分页点击
  onPageClick(e) {
    if (!e.pageDisable) {
      if (e.value === "nextPage") {
        if (this.tempPage != this.totalPages) {
          this.tempPage += 1;
        }
      }
      if (e.value === "prePage") {
        if (this.tempPage != 1) {
          this.tempPage -= 1;
        }
      }
      if (e.value === "firstPage") {
        this.tempPage = 1;
      }
      if (e.value === "lastPage") {
        this.tempPage = this.totalPages;
      }
      this.currentPages = this.tempPage;
      this.onPageChange.emit({
        currentPage: this.tempPage,
        pageCount: this.totalPages,
        pageRows: this.currentPagesSelect,
      });
      this.onPageClickFn(this.paginatorData);
    }
  }

  // 分页点击方法
  onPageClickFn(paginatorData) {
    paginatorData.forEach(el => {
      el.pageDisable = false;
      if (this.tempPage == 1) {
        if (el.value == "firstPage" || el.value == "prePage") {
          el.pageDisable = true;
        }
      }
      if (this.tempPage == this.totalPages) {
        if (el.value == "nextPage" || el.value == "lastPage") {
          el.pageDisable = true;
        }
      }
    });
  }

  // ------------------- beg pageInput 方法 -------------------
  pageInputkeydown(e) {
    if (this.keydownCode(e)) {
      if (e.key === ".") {
        return false;
      }
      if (isNaN(e.key * 1)) {
        return false;
      }
      if (e.code === "Space") {
        return false;
      }
    }
  }

  pageInputkeyup(e) {
    e.target.value = e.target.value.replace(/[^\d+-.]/g, '');
    if (e.key == "Enter") {
      this.tempPage = this.currentPages = e.target.value;
      if (e.target.value * 1 >= this.totalPages) {
        e.target.value = this.tempPage = this.currentPages = this.totalPages;
      }
      if (e.target.value * 1 <= 1) {
        e.target.value = this.tempPage = this.currentPages = 1;
      }
      this.tempPage = this.tempPage * 1;
      this.onPageChange.emit({
        currentPage: this.tempPage,
        pageCount: this.totalPages,
        pageRows: this.currentPagesSelect,
      });
      this.onPageClickFn(this.paginatorData);
    }
  }

  keydownCode(e) {
    return e.key !== "Backspace" && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "ArrowUp" && e.key !== "ArrowDown";
  }
  // ------------------- end pageInput 方法 -------------------
}

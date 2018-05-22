import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { data } from './test';
import { TreeNode, MenuItem } from 'primeng/api';
@Component({
  selector: 'primengTree',
  templateUrl: './primengTree.component.html',
})
export class PrimengTreeComponent {
  @Input() treeData: any;
  @Output() onNodeSelect = new EventEmitter<any>();
  @Output() onNodeUnselect = new EventEmitter<any>();

  // --> tree 数据
  filesTree: any;

  // --> 双绑选中
  selectedTreeNode: TreeNode;

  constructor() { };

  ngOnChanges() {
    console.log(`tree组件`, this.treeData);
    this.filesTree = this.treeData.data;
  }


  // ----------> primeng
  // --> 选中tree节点
  nodeSelect() {
    this.onNodeSelect.emit(this.selectedTreeNode);
  }
  // --> 取消选中tree节点
  nodeUnselect() {
    this.onNodeUnselect.emit(this.selectedTreeNode);
  }

}

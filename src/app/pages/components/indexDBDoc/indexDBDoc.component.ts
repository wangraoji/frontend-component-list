import { Component } from '@angular/core';
import { IndexedDBService } from '../../indexedDB/indexedDB.service';
import { ViewChild } from '@angular/core';
import * as _ from 'lodash';

import { myNgLib } from 'wangrj-hs-text-lib';

@Component({
  selector: 'app-indexDBDoc',
  templateUrl: './indexDBDoc.component.html',
  styleUrls: ['./indexDBDoc.component.css'],
  // providers: [IndexedDBService],
})
export class IndexDBDocComponent {

  @ViewChild('oneInput') oneInput;

  studentData: any;

  student: any = {};

  dialogData: any = {
    title: ``,
    display: false,
  };

  selectedStudent: any;

  serchValue: any;

  searchDialog: boolean = false;

  constructor(private dbSrv: IndexedDBService) { }

  ngOnInit() {
    this.dbSrv.createDBTable(`students`).then(res => {
      this.assignment(res);
      console.log(this.dbSrv.getDBVersion());
    })
  }
  // 新增
  addDialog() {
    this.dialogData = {
      title: `新增`,
      display: true,
    };
  }

  // 删除
  deleteDb() {
    if (this.selectedStudent) {
      this.dbSrv.deleteDb(this.selectedStudent.uniqueid).then(res => {
        this.assignment(res);
        this.selectedStudent = null;
      })
    } else {
      window.confirm(`还没有选中数据`);
    }
  }

  // 修改
  editDb() {
    if (this.selectedStudent) {
      this.dialogData = {
        title: `修改`,
        display: true,
      };
      this.student = _.cloneDeep(this.selectedStudent);
    } else {
      window.confirm(`还没有选中数据`);
    }
  }

  // 查询
  searchDb() {
    // this.searchDialog = true;
    if (this.serchValue && this.serchValue != "") {
      this.dbSrv.searchDb(this.serchValue).then(res => {
        if (res) {
          this.assignment(res);
        } else {
          // console.log(1);
          this.studentData = [];
          this.searchDialog = true;
        }
      })
    } else {
      this.dbSrv.showDb().then(res => {
        this.assignment(res);
      })
    }
  }

  // 删除数据库
  // deleteDBTable() {
  //   // this.dbSrv.deleteDBTable(`students`, 2).then(res => {
  //   //   // this.assignment(res);
  //   // })
  //   this.dbSrv.deleteDBTable(`students`, 3).then(res => {
  //     this.assignment(res);
  //   })
  // }
  

  // 保存
  onSave() {
    if (this.regStuten(this.student)) {
      if (this.dialogData.title == "新增") {
        let students = [];
        students.push(this.student);
        this.dbSrv.addDB(students).then((res) => {
          this.assignment(res);
          this.student = {};
        })
      } else {
        this.dbSrv.editDb(this.student).then(res => {
          this.assignment(res);
        })
      }
    }
  }

  // 取消模态框
  onClose() {
    // console.log(`关闭`);
    this.dialogData.display = false;
  }


  // -------------------- beg fn 合集 --------------------

  assignment(res) {
    if (res) {
      this.studentData = res;
      this.searchDialog = false;
      this.onClose();
    }
  }

  regStuten(student) {
    let flag = true;
    if (!student.name || student.name === "") {
      flag = false;
      window.confirm(`姓名未填写`)
    }
    if (!student.age || student.age === "") {
      flag = false;
      window.confirm(`年龄未填写`)
    }
    if (!student.like || student.like === "") {
      flag = false;
      window.confirm(`爱好未填写`)
    }
    if (!student.dep || student.dep === "") {
      flag = false;
      window.confirm(`部门未填写`)
    }
    return flag;
  }

  onShow() {
    setTimeout(() => {
      this.oneInput.nativeElement.focus();
    }, 1);
  }

  // -------------------- end fn 合集 --------------------
}

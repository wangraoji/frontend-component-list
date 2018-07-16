import { Component } from '@angular/core';
import { IndexedDBService } from '../../indexedDB/indexedDB.service';
import { myNgLib } from 'wangrj-hs-text-lib'
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [IndexedDBService],
})
export class HomeComponent {
    production: boolean;

    // cx: any;
    // constructor(private dbSrv: IndexedDBService) { }

    // // 本地数据库
    // // request: any;

    // // 数据
    // // myDB: any = {};
    // myDB = {
    //     name: 'test',
    //     version: 2,
    //     db: null
    // };
    // db: any;

    // students = [
    //     {
    //         id: 1001,
    //         name: "Byron",
    //         age: 24
    //     },
    //     {
    //         id: 1002,
    //         name: "Frank",
    //         age: 30
    //     },
    //     {
    //         id: 1003,
    //         name: "Aaron",
    //         age: 26
    //     }
    // ];
    ngOnInit() {
        console.log(myNgLib);
        // this.dbSrv.open().then((e) => { })


        // this.openDB(this.myDB.name, this.myDB.version);
        // setTimeout(() => {

        // }, 500);
    }

    // openDB(name, versions) {
    //     let version = versions || 1;
    //     let request = indexedDB.open(name, version);
    //     request.onerror = (e: any) => {
    //         console.log(e.currentTarget.error.message);
    //     };
    //     request.onsuccess = (e: any) => {
    //         console.log(`打开数据库成功`);
    //         this.myDB.db = e.target.result;
    //     };
    //     request.onupgradeneeded = (e: any) => {
    //         var db = e.target.result;
    //         if (!db.objectStoreNames.contains('students')) {
    //             // let newDB = db.createObjectStore('students', { autoIncrement: true });
    //             // let newDB = db.createObjectStore('students', { keyPath: 'uniqueid' });
    //             // newDB.createIndex('nameIndex', 'name', { unique: true });
    //             // newDB.createIndex('ageIndex', 'age', { unique: false });

    //             db.createObjectStore('students', { keyPath: 'uniqueid' });
    //         }
    //         console.log('DB version changed to ' + version);
    //     };
    // }

    // // 新增数据
    // addDB(db, storeName, data) {
    //     var transaction = db.transaction(storeName, 'readwrite');
    //     var store = transaction.objectStore(storeName);
    //     data.forEach(el => {
    //         el.uniqueid = this.creatGuid();
    //         store.add(el);
    //     });
    //     this.showDb(db, storeName);
    // }

    // // 查询数据
    // searchDB(db, storeName, value) {
    //     var transaction = db.transaction(storeName, 'readwrite');
    //     var store = transaction.objectStore(storeName);
    //     var request = store.getAll();
    //     request.onsuccess = () => {
    //         let copyData = [...request.result];
    //         let newData = copyData.filter(el => {
    //             if (JSON.stringify(el).toLowerCase().indexOf(value.toLowerCase()) !== -1) {
    //                 return el;
    //             }
    //         })
    //         if (newData.length > 0) {
    //             console.log(...newData);
    //         } else {
    //             console.log(`没有查询到数据，返回全部数据`, request.result);
    //         }
    //     }
    // }

    // deleteDB(db, storeName, value) {
    //     var transaction = db.transaction(storeName, 'readwrite');
    //     var store = transaction.objectStore(storeName);
    //     var request = store.delete(value);
    //     request.onsuccess = () => {
    //         console.log(`删除成功`);
    //         let shwoDB = store.getAll();
    //         shwoDB.onsuccess = () => {
    //             console.log(shwoDB.result);
    //         }
    //     }
    // }

    // editDB(db, storeName, value) {
    //     var transaction = db.transaction(storeName, 'readwrite');
    //     var store = transaction.objectStore(storeName);

    //     let a = { id: 1001, name: "Byron", age: 30 };
    //     store.put(a);
    //     this.showDb(db, storeName);
    // }

    // showDb(db, storeName) {
    //     var transaction = db.transaction(storeName, 'readwrite');
    //     var store = transaction.objectStore(storeName);
    //     var request = store.getAll();
    //     request.onsuccess = (event) => {
    //         console.log("成功", request.result);
    //     };

    // }

    // add() {
    //     this.addDB(this.myDB.db, 'students', this.students);
    //     console.log(`新增成功`);
    // }

    // delete() {
    //     this.deleteDB(this.myDB.db, 'students', 1001);
    // }

    // edit() {
    //     this.editDB(this.myDB.db, 'students', 1001);
    // }

    // search() {
    //     if (this.cx) {
    //         this.searchDB(this.myDB.db, 'students', this.cx);
    //     }
    // }


    // // 关闭数据库
    // closeDB(db) {
    //     db.close();
    // }

    // // 删除数据
    // // deleteDB(name) {
    // //     indexedDB.deleteDatabase(name);
    // // }

    // creatGuid() {
    //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    //         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    //         return v.toString(16);
    //     });
    // }
}

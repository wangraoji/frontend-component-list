import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  // 声明一些属性，name：数据库名,version：数据库版本
  // name和version发生变化，浏览器就会重新建一个新的indexedDB
  private name: string = 'xieqi-database';
  private version: number = (~~localStorage.getItem('dbVersion')) || 1;
  private db: any = null;
  private dbTablename: any;
  constructor() { }

  createDBTable(dbTablename, version?) {
    let versions = version || this.version;
    console.log(`versions`, versions);
    let request = indexedDB.open(this.name, versions);
    this.dbTablename = dbTablename;
    return new Promise((resolve, reject) => {
      request.onerror = (e: any) => {
        console.log(`操作失败`, e.currentTarget.error.message);
      };
      request.onsuccess = (e: any) => {
        this.db = e.target.result;
        console.log(`打开数据库成功`);
        this.showDb().then(res => {
          resolve(res);
        })
      };

      request.onupgradeneeded = (e: any) => {
        console.log(`改变版本`);
        
        let db = e.target.result;
        localStorage.setItem('dbVersion', e.newVersion);

        // let db = e.target.result;
        if (!db.objectStoreNames.contains(dbTablename)) {
          // 创建一个数据库存储对象
          let objectStore = db.createObjectStore(dbTablename, {
            keyPath: 'id',
            autoIncrement: true
          });

          // 定义存储对象的数据项
          objectStore.createIndex('uniqueid', 'uniqueid', {
            unique: true
          });
          // objectStore.createIndex('id', 'id');
          // objectStore.createIndex('name', 'name');
          // objectStore.createIndex('age', 'age');
          // objectStore.createIndex('like', 'like');
          // objectStore.createIndex('dep', 'dep');
          //   // db.createObjectStore(dbTablename, { keyPath: keyPath, autoIncrement: true });
          //   let objectStore = db.createObjectStore(dbTablename, { autoIncrement: true });
          //   objectStore.createIndex('uniqueid', 'uniqueid', {
          //     unique: false
          //   });
          //   console.log(`添加表 ${dbTablename} 成功，当前版本：${versions}`);
        }
      };
    })
  }


  // 新增数据
  addDB(data): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!data || data.length === 0) {
        return Promise.resolve();
      }
      let transaction = this.db.transaction(this.dbTablename, 'readwrite');
      let store = transaction.objectStore(this.dbTablename);
      data.forEach(el => {
        el.uniqueid = this.creatGuid();
        store.add(el);
      });
      console.log(`添加成功`);
      this.showDb().then(res => {
        resolve(res);
      })
    })
      .catch((error) => {
        console.error('添加' + this.dbTablename + '表数据失败');
        // return Promise.reject('添加 ' + dbTablename + ' 表数据失败');
      });
  }

  // 删除数据
  deleteDb(uniqueid): Promise<any> {
    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(this.dbTablename, 'readwrite');
      let store = transaction.objectStore(this.dbTablename);
      let index = store.index('uniqueid');
      let request = index.openCursor(IDBKeyRange.only(uniqueid));
      request.onsuccess = (e) => {
        let cursor = e.target.result;
        if (cursor) {
          let studentKey = cursor.primaryKey;
          cursor.continue();
          store.delete(studentKey);
          console.log(`删除成功`);
          this.showDb().then(res => {
            resolve(res);
          })
        }
      }
    })
  }

  // 修改数据
  editDb(data): Promise<any> {
    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(this.dbTablename, 'readwrite');
      let store = transaction.objectStore(this.dbTablename);
      let index = store.index('uniqueid');
      let request = index.openCursor(IDBKeyRange.only(data.uniqueid));
      request.onsuccess = (e) => {
        let cursor = e.target.result;
        if (cursor) {
          let student = cursor.value;
          for (var key in data) {
            if (typeof student[key] != 'undefined') {
              student[key] = data[key];
            }
          }
          store.put(student);
          cursor.continue();
          console.log(`修改成功`);
          this.showDb().then(res => {
            resolve(res);
          })
        }
      }
    })
  }

  // 查找数据
  searchDb(value): Promise<any> {
    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(this.dbTablename, 'readwrite');
      let store = transaction.objectStore(this.dbTablename);
      let request = store.getAll();
      request.onsuccess = () => {
        let copyData = [...request.result];
        let newData = copyData.filter(el => {
          delete el.uniqueid;
          delete el.id;
          if (JSON.stringify(el).toLowerCase().indexOf(value.toLowerCase()) !== -1) {
            console.log(el);
            return el;
          }
        })
        if (newData.length > 0) {
          resolve(newData);
        } else {
          console.log(`没有查询到数据，返回全部数据`, request.result);
          resolve(null);
        }
      }
    })
  }


  // 删除数据库
  deleteDBTable(tableName, version): Promise<any> {
    this.db.close();
    let versions = version || this.version;
    let request = indexedDB.open(this.name, versions);
    this.dbTablename = tableName;
    return new Promise((resolve, reject) => {
      request.onerror = (e: any) => {
        console.log(`操作失败`, e.currentTarget.error.message);
      };
      request.onsuccess = (e: any) => {
        this.db = e.target.result;
        console.log(`准备删除数据库`);
      };
      request.onupgradeneeded = (e: any) => {
        let db = e.target.result;
        console.log(`准备中`);
        if (db.objectStoreNames.contains(tableName)) {
          db.deleteObjectStore(tableName);
          // this.showDb().then(res => {
          //   resolve(res);
          // })
        }
      };
    })
  }

  showDb(): Promise<any> {
    return new Promise((resolve, reject) => {
      let transaction = this.db.transaction(this.dbTablename, 'readwrite');
      let store = transaction.objectStore(this.dbTablename);
      let request = store.getAll();
      request.onerror = (event) => {
        console.log('获取数据库失败', event.currentTarget.error.message)
        reject('删除数据库失败')
      }
      request.onsuccess = (event) => {
        resolve(request.result);
      };
    });
  }


  getDBVersion() {
    return ~~localStorage.getItem('dbVersion');
  }


  creatGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  // // 清除30天前的数据
  // cleanViewDB() {
  //   this.open().then(() => {
  //     // 通过IDBDatabase得到IDBTransaction
  //     let transaction = this.db.transaction('viewedDoc', 'readonly');
  //     // 通过IDBTransaction得到IDBObjectStore
  //     let objectStore = transaction.objectStore("viewedDoc");
  //     // 打开游标，遍历customers中所有数据
  //     objectStore.openCursor().onsuccess = (event) => {
  //       let cursor = event.target.result;
  //       if (cursor) {
  //         let key = cursor.key;
  //         let rowData = cursor.value;
  //         var time1 = new Date(rowData.lastViewTime);
  //         var time2 = new Date();
  //         if (Math.abs(time2.getTime() - time1.getTime()) > 2592000000) {// 清除三十天前的数据
  //           this.workdelete('viewedDoc', cursor.key);
  //         }
  //         cursor.continue();
  //       }
  //     };
  //   })

}

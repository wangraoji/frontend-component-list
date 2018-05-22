import { Component } from '@angular/core';
import {
    list1Data
} from './pvmListDatas';
@Component({
    selector: 'pvmList',
    templateUrl: './pvmList.component.html',
    styleUrls: ['./pvmList.component.scss'],
})

export class PvmListComponent {

    // list1 数据
    list1Data: any = list1Data;


    constructor() { };

    ngOnInit() {
       
    }
}

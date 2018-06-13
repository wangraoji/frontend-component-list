import { Component } from '@angular/core';
import {
    list1Data,
    list2Data,
    edit1Data,
    edit2Data,
} from './pvmListDatas';
@Component({
    selector: 'pvmList',
    templateUrl: './pvmList.component.html',
    styleUrls: ['./pvmList.component.scss'],
})

export class PvmListComponent {

    // list1 数据
    list1Data: any = list1Data;
    // list1 数据
    list2Data: any = list2Data;
    // edit1 数据
    edit1Data: any = edit1Data;
    // edit2 数据
    edit2Data: any = edit2Data;
    constructor() { };

    ngOnInit() {

    }
}

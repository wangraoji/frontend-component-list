import { Component } from '@angular/core';

@Component({
    selector: 'pvmc',
    templateUrl: './pvmc.component.html',
    styleUrls: ['./pvmc.component.scss'],
})

export class PvmcComponent {
    display: any = false;
    fdStr:any;
    constructor() { };

    ngOnInit() {

    }

    fd(str){
        this.display = true;
        this.fdStr = str;
    }
}

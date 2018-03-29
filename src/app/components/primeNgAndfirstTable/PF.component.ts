import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'primeNgAndfirstTable',
  templateUrl: './PF.component.html',
})
export class PfComponent {
  href: string;
  $: any;  
  constructor() { }

  ngOnInit() {
    this.href = environment.production ? 'http://xieqi.i7b.cn/primengOrFirstTable/' : 'http://192.168.2.242:4203/';
  }

}

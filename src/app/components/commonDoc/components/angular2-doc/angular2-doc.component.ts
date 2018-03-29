import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular2Doc',
  templateUrl: './angular2-doc.component.html',
  styles: [`
    ul li{
      margin-bottom: 10px;
    }
    pre {
      font-size: 16px;
      font-family: 'Roboto', "Trebuchet MS", Arial, Helvetica, sans-serif;
    }
  `]
})
export class Angular2DocComponent {

  constructor() { }

  ngOnInit() {
  }

}

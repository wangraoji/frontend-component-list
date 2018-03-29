import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'commonTechniques',
  templateUrl: './techniques.component.html',
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
export class TechniquesComponent{
  
  countdown: string; // 倒计时
  timeStamp: string; // 时间戳
  constructor() { }

  ngOnInit() {
    this.countdown = `
      let t = null;
      t = setTimeout(time, world.sec);
      function time() {
          clearTimeout(t);
          dt = new Date();
          var nian = dt.getFullYear(), 
          yue = dt.getMonth() + 1, 
          day = dt.getDate(), h = dt.getHours(), 
          m = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes(), 
          s = dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds();
          
          $('element').html(nian + "/" + yue + "/" + day + "  " + h + ":" + m + ":" + s);
          // angular2 就是 this.xxx = 'nian + "/" + yue + "/" + day + "  " + h + ":" + m + ":" + s';
          t = setTimeout(time, world.sec);
      }
    `;
    this.timeStamp = `
      let time = '/Date(1483286400000)/';
      // 先把 前后 / / 删掉
      time = time.replace(/\//g,'')    // 得到 Date(1483286400000);
      // 用eval方法  newTime = new Date(1483286400000);
      let newTime = eval('new ' + time);
      conosle.log(newTime)  // 得出 'Mon Jan 02 2017 00:00:00 GMT+0800 (中国标准时间)'
  
      // 下面第1种方法（也是用的比较多的）
      newTime = newTime.toLocaleString().slice(0,9); // 得出 "2017-1-2 00:00:00"   截取前面9位  2017-1-2
  
      // 第2种方法
      newTime = newTime.toISOString().slice(0,10); // 得出 "2017-01-01T16:00:00.000Z" 截取前面10位 2017-01-01
    `;
  }

}

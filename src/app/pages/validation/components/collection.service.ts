import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }

  // ---------- beg onlyDate ----------
  onlyDateKeyDownFn(e) {
    let flag = true;
    if (this.keydownCode(e)) {
      flag = this.ifLength58(e, flag);
      flag = this.isNaNAndSpaceFn(e, flag);
    }
    return flag;
  }

  onlyDateKeyUpFn(e) {
    return this.ifLength487(e);
  }
  // ---------- end onlyDate ----------

  // ---------- beg onlyDateTime ----------
  onlyDateTimeKeyDownFn(e) {
    let flag = true;
    flag = this.onlyDateKeyDownFn(e);
    if (e.target.value.length === 11) {
      if (!(e.key * 1 <= 2)) {
        flag = false;
      }
    }
    if (e.target.value.length === 12) {
      if (!(e.key * 1 <= 4)) {
        flag = false;
      }
    }
    if (e.target.value.length === 14 || e.target.value.length === 17) {
      if (!(e.key * 1 <= 5)) {
        flag = false;
      }
    }
    return flag;
  }

  onlyDateTimeKeyUpFn(e) {
    let value = this.ifLength487(e);
    if (value.length > 7 && value.length < 9) {
      let tempValue = value.split('');
      if (e.key == "-") {
        tempValue[8] = '0';
        tempValue[9] = '1';
        e.target.value = tempValue.join('');
      }
    }
    if (value.length === 10) {
      e.target.value = value + ' ';
    }
    if (value.length === 13) {
      e.target.value = value + ':';
    }
    if (value.length === 16) {
      e.target.value = value + ':';
    }

    return e.target.value;
  }
  // ---------- end onlyDateTime ----------
  // ---------- beg onlyIntFn ----------
  onlyIntKeyDownFn(e) {
    let flag = true;
    if (e.key !== "Backspace") {
      flag = this.ifLength(e, flag);
      if (e.key !== "+" && e.key !== "-") {
        flag = this.isNaNAndSpaceFn(e, flag);
      }
    }
    return flag;
  }
  // ---------- end onlyIntFn ----------

  // ---------- beg onlyFloat ----------
  onlyFloatKeyDownFn(e) {
    let flag = true;
    if (this.keydownCode(e)) {
      flag = this.ifIndexOfFlaot(e, flag);
      flag = this.ifLength(e, flag);
      if (e.key !== "." && e.key !== "+" && e.key !== "-") {
        flag = this.isNaNAndSpaceFn(e, flag);
      }
    }
    return flag;
  }
  // ---------- end onlyFloat ----------

  // ---------- beg onlyNumber ----------
  onlyNumberKeyDownFn(e) {
    return this.onlyFloatKeyDownFn(e);
  }
  // ---------- end onlyNumber ----------



  // ---------- beg 验证方法 ----------

  // keydown 不等删除上下左右键
  keydownCode(e) {
    return e.key !== "Backspace" && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "ArrowUp" && e.key !== "ArrowDown";
  }

  // date验证如果length = 5 || 8 
  ifLength58(e, flag) {
    if (e.target.value.length === 5) {
      if (!(e.key * 1 <= 1)) {
        flag = false;
      }
    }
    if (e.target.value.length === 6) {
      if (!(e.key * 1 <= 2)) {
        flag = false;
      }
    }
    if (e.target.value.length === 8) {
      if (!(e.key * 1 <= 3)) {
        flag = false;
      }
    }
    return flag;
  }

  // date验证 如果length = 4 8 7
  ifLength487(e) {
    let value = e.target.value;
    if (value.length < 4) {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }
    if (value.length === 4) {
      e.target.value = value + '-';
    }
    if (value.length > 4 && value.length < 8) {
      let tempValue = value.split('');
      if (e.key == "-") {
        tempValue[5] = '0';
        tempValue[6] = '1';
      }
      value = tempValue.join('');
    }
    if (value.length === 7) {
      e.target.value = value + '-';
    }
    if (value.length > 7) {
      let tempValue = value.split('');
      if (e.key == "-") {
        tempValue[8] = '0';
        tempValue[9] = '1';
      }
      if (tempValue[8] === '3') {
        if (tempValue[9] * 1 > 1) {
          tempValue[9] = '1';
        }
      }
      let tempYear = value.split('-')[0],
        tempMonth = value.split('-')[1];
      if (tempMonth === '02') {
        if (((tempYear % 4) == 0) && ((tempYear % 100) != 0) || ((tempYear % 400) == 0)) { } else {
          if (tempValue[8] == "2") {
            if (tempValue[9] * 1 > 8) {
              tempValue[9] = "8";
            }
          }
        }
      }
      e.target.value = tempValue.join('');
    }

    return e.target.value;
  }
  // 非数字非空格键验证
  isNaNAndSpaceFn(e, flag) {
    if (isNaN(e.key * 1)) {
      flag = false;
    }
    if (e.code === "Space") {
      flag = false;
    }
    return flag;
  }

  // 如果length > 0 不让输入 + - .等符号
  ifLength(e, flag) {
    if (e.target.value.length > 0) {
      if (e.key === "+" || e.key === "-") {
        flag = false;
      }
    }
    return flag;
  }

  // 如果有小数.了不让它再输入.
  ifIndexOfFlaot(e, flag) {
    if (e.target.value.indexOf('.') !== -1) {
      if (e.key === ".") {
        flag = false;
      }
    }
    return flag;
  }

  // 浮点金额补 .00
  blurFn(e) {
    if (e.target.value !== '' && e.target.value.indexOf('.') === -1) {
      e.target.value = e.target.value + ".00";
    }
    let tempValue = e.target.value.split('');
    if (tempValue[tempValue.length - 1] === '.') {
      e.target.value = e.target.value + '00';
    }
    return e.target.value;
  }
  // ---------- end 验证方法 ----------
}


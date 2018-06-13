import { Directive } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CollectionService } from './collection.service';
// ---------- beg 只能输入日期 ----------
@Directive({
    selector: '[onlyDate]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
        'maxlength': '10',
    },
    providers: [NgModel,CollectionService],
})

export class OnlyDateDirective {
    constructor(public control: NgModel, private srv: CollectionService) {
    }
    onkeydown(e) {
        if (!this.srv.onlyDateKeyDownFn(e)) {
            return false;
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^0-9-]/g, '')
        this.control.viewToModelUpdate(this.srv.onlyDateKeyUpFn(e));
    }
}
// ---------- end 只能输入日期 ----------

/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/

// ---------- beg 只能输入日期时间 ----------
@Directive({
    selector: '[onlyDateTime]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
        'maxlength': '19',
    },
    providers: [NgModel,CollectionService],
})
export class OnlyDateTimeDirective {
    constructor(public control: NgModel, private srv: CollectionService) { }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            if (!this.srv.onlyDateTimeKeyDownFn(e)) {
                return false;
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^0-9-\s*:]/g, '')

        this.control.viewToModelUpdate(this.srv.onlyDateTimeKeyUpFn(e));
    }
}
// ---------- end 只能输入日期时间 ----------

/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/

@Directive({
    selector: '[onlyEmail]',
    host: {
        '(blur)': 'onblur($event)',
        '(focus)': 'onfocus($event)',
    },
})

export class OnlyEmailDirective {
    color: any;
    constructor(public control: NgModel) { }
    onfocus(e) {
        if (e.target.value = "请输入正确的邮箱") {
            e.target.value = '';
            e.target.style.color = this.color;
        }
    }
    onblur(e) {
        let reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        if (!reg.test(e.target.value)) {
            e.target.value = '请输入正确的邮箱';
            this.color = e.target.style.color;
            e.target.style.color = "red";
        }
        this.control.viewToModelUpdate(e.target.value);
    }
}
/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/

// ---------- beg 只能输入整数 ----------
@Directive({
    selector: '[onlyInt]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
    },
    providers: [NgModel,CollectionService],
})

export class OnlyIntDirective {
    constructor(public control: NgModel, private srv: CollectionService) {
    }
    onkeydown(e) {
        if (!this.srv.onlyIntKeyDownFn(e)) {
            return false;
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\d+-]/g, '')
        this.control.viewToModelUpdate(e.target.value);
    }
}
// ---------- end 只能输入整数 ----------

/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/

// ---------- beg 只能输入浮点数 ----------
@Directive({
    selector: '[onlyFloat]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
        '(blur)': 'onblur($event)'
    },
    providers: [NgModel,CollectionService],
})

export class OnlyFloatDirective {
    constructor(public control: NgModel, private srv: CollectionService) {
    }
    onkeydown(e) {
        if (!this.srv.onlyFloatKeyDownFn(e)) {
            return false;
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\d+-.]/g, '');
        this.control.viewToModelUpdate(e.target.value);
    }

    onblur(e) {
        this.control.viewToModelUpdate(this.srv.blurFn(e));
    }
}
// ---------- end 只能输入浮点数 ----------

/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/

// ---------- beg 只能输入数字 ----------
@Directive({
    selector: '[onlyNumber]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
    },
    providers: [NgModel,CollectionService],
})

export class OnlyNumberDirective {
    constructor(public control: NgModel, private srv: CollectionService) {
    }
    onkeydown(e) {
        if (!this.srv.onlyNumberKeyDownFn(e)) {
            return false;
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\d+-.]/g, '')
        this.control.viewToModelUpdate(e.target.value);
    }
}
// ---------- end 只能输入数字 ----------

/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/

// ---------- beg 只能输入汉字 ----------
@Directive({
    selector: '[onlyCh]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
    },
})

export class OnlyChDirective {
    constructor(public control: NgModel) {
    }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            return false;
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\u4e00-\u9fa5]/g, '');
        // e.target.value = e.target.value.replace(/^([^a-z].*)|(([a-z]\w*).*\W.*)$/i,'$3');
        this.control.viewToModelUpdate(e.target.value);
    }
}
// ---------- end 只能输入汉字 ----------

/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/

// ---------- beg 只能输入英文 ----------
@Directive({
    selector: '[onlyEn]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
    },
})

export class OnlyEnDirective {
    constructor(public control: NgModel) {
    }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            if (!isNaN(e.key * 1)) {
                return false;
            }
            if (e.code === "Space") {
                return false;
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^a-zA-Z\(\)]/g, '');
        this.control.viewToModelUpdate(e.target.value);
    }
}
// ---------- beg 只能输入英文 ----------

/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/



// ---------- beg 只能输入英文加数字 ----------
@Directive({
    selector: '[onlyEnNum]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
    },
})

export class OnlyEnNumDirective {
    constructor(public control: NgModel) {
    }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            if (e.code === "Space") {
                return false;
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
        this.control.viewToModelUpdate(e.target.value);
    }
}
// ---------- end 只能输入英文加数字 ----------

/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/

// ---------- beg 只能输入英文加数字符号 ----------
@Directive({
    selector: '[onlyEnNumSign]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
    },
})

export class OnlyEnNumSingDirective {
    constructor(public control: NgModel) {
    }
    onkeydown(e) {
        if (e.key !== "Backspace") {
            if (e.code === "Space") {
                return false;
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\w.\(\)\<\>\[\]]/g, '')
        this.control.viewToModelUpdate(e.target.value);
    }
}
// ---------- end 只能输入英文加数字 ----------

/*
--------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
*/

// ---------- beg 只能输入货币数字 ----------
@Directive({
    selector: '[onlyMoney]',
    host: {
        '(keyup)': 'onkeyup($event)',
        '(keydown)': 'onkeydown($event)',
        '(blur)': 'onblur($event)'
    },
    providers: [NgModel,CollectionService],
})

export class OnlyMoneyDirective {
    constructor(public control: NgModel, private srv: CollectionService) {
    }
    onkeydown(e) {
        if (this.srv.keydownCode(e)) {
            if (!this.srv.ifIndexOfFlaot(e, true)) {
                return false;
            }
            if (e.key == ",") {
                return false;
            }
            if (e.key !== '.') {
                if (!this.srv.isNaNAndSpaceFn(e, true)) {
                    return false;
                }
            }
        }
    }
    onkeyup(e) {
        e.target.value = e.target.value.replace(/[^\d.,]/g, '');
        let value = e.target.value;
        if (value.indexOf('.') === -1) {
            if (value !== "") {
                e.target.value = this.fmoney(value);
            }
        } else {
            let tempValue = value.split('.');
            let newValueOne = this.fmoney(tempValue[0].replace(/\,/g, '')),
                newValueTwo = tempValue[1];
            if (newValueTwo.length > 2) {
                newValueTwo = newValueTwo.slice(0, newValueTwo.length - 1);
            }
            e.target.value = newValueOne + '.' + newValueTwo;
        }

        this.control.viewToModelUpdate(e.target.value);
    }

    onblur(e) {
        e.target.value = this.srv.blurFn(e);

        let tempValue = e.target.value.split('.');
        if (tempValue[1].length < 2) {
            e.target.value = e.target.value + '0';
        }

        this.control.viewToModelUpdate(e.target.value);
    }

    fmoney(s) {
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";
        var l = s.split(".")[0].split("").reverse(),
            r = s.split(".")[1];
        let t = "";
        for (let i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("");
    }
}
// ---------- end 只能输入货币数字 ----------

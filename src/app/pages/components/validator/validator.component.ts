import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { mobileValidator, passValidator } from './validatorLib';
@Component({
    selector: 'validator',
    templateUrl: './validator.component.html', 
    styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent {
    dec1:string = `1. npm install --save @ngx-app-frame/domain`
    dec2:string = `2. import { AFValidationModule } from '@ngx-app-frame/domain';`;
    dec3:string = `3. 把 AFValidationModule 加入到你 module 里的 imports 如：imports: [AFValidationModule]。`;

    test: any = {};
    public myForm: FormGroup;
    str: any;
    constructor(private fb: FormBuilder) {
        this.createForm();
    }
    ngOnInit() {
        this.test = {
            onlyDateCode: `<input type="text" onlyDate [(ngModel)]="test.onlyDate">`,
            onlyDateTimeCode:`<input type="text" onlyDateTime  [(ngModel)]="test.onlyDateTime">`,
            onlyEmailCode:`<input type="text" onlyEmail  [(ngModel)]="test.onlyEmail">`,
            onlyIntCode:`<input type="text" onlyInt  [(ngModel)]="test.onlyInt">`,
            onlyFloatCode:`<input type="text" onlyFloat  [(ngModel)]="test.onlyFloat">`,
            onlyNumberCode:`<input type="text" onlyNumber  [(ngModel)]="test.onlyNumber">`,
            onlyChCode:`<input type="text" onlyCh  [(ngModel)]="test.onlyCh">`,
            onlyEnCode:`<input type="text" onlyEn  [(ngModel)]="test.onlyEn">`,
            onlyEnNumCode:`<input type="text" onlyEnNum  [(ngModel)]="test.onlyEnNum">`,
            onlyEnNumSignCode:`<input type="text" onlyEnNumSign  [(ngModel)]="test.onlyEnNumSign">`,
            onlyMoneyCode:`<input type="text" onlyMoney  [(ngModel)]="test.onlyMoney">`,
        }
    }

    // 创建表单元素
    createForm() {
        this.myForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
        });

    }

    // 提交表单函数
    postDate() {
        /**
         * valid:是否有效 
         * invalid:无效
         * dirty:脏
         * status:状态
         * errors:显示错误
         */
        // console.log(this.myForm);

        if (this.myForm.valid) {
            console.log(this.myForm.value);
            this.str = JSON.stringify(this.myForm.value);
        }

    }
}

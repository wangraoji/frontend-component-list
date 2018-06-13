import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { mobileValidator, passValidator } from './validatorLib';
@Component({
    selector: 'validator',
    templateUrl: './validator.component.html',
    styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent {
    dec1:string = `由于目前没有发布到NPM，只能把整个 validation 文件 copy 到你所需的项目里。`
    dec2:string = `然后在你需要用的 module 里使用如下命令：`;
    dec3:string = `import { collection } from './(你的路径)validation'`;
    dec4:string = `然后把 collection 加入到你 module 里的 declarations。 如：declarations: [...collection]。`;

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

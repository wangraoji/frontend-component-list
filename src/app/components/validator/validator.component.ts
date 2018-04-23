import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { mobileValidator, passValidator } from './validatorLib';
@Component({
    selector: 'validator',
    templateUrl: './validator.component.html',
    styleUrls:['./validator.component.scss']
})
export class ValidatorComponent {
    private myForm: FormGroup;
    str:any;
    constructor(private fb: FormBuilder) {
        this.createForm();
    }
    ngOnInit() {
    }

    // 创建表单元素
    createForm() {
        this.myForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
            mobile: ['', [Validators.required, mobileValidator]],
            email: ["", [Validators.required, Validators.email]],
            password: this.fb.group({
                pass1: ['', [Validators.required]],
                pass2: ['', [Validators.required]]
            }, { validator: passValidator })
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
        if (this.myForm.valid) {
            console.log(this.myForm.value);
            this.str = JSON.stringify(this.myForm.value);
        }

    }
}

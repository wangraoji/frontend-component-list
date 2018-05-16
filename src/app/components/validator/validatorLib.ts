import { FormControl, FormGroup } from '@angular/forms';

export function mobileValidator(control: FormControl): any {
    // 获取到输入框的值
    const val = control.value;
    // 手机号码正则
    const mobieReg = /^[1][3,5,6,7,8][0-9]{9}$/;
    const result = mobieReg.test(val);
    return result ? null : { mobileValidator: { info: '手机号码格式不正确' } };
}


// 定义一个密码组的验证方法
export function passValidator(controlGroup: FormGroup): any {
    // 获取密码输入框的值
    const pass1 = controlGroup.get('pass1').value as FormControl;
    const pass2 = controlGroup.get('pass2').value as FormControl;
    const isEqule: boolean = (pass1 === pass2);
    return isEqule ? null : { passValidator: { info: '两次密码不一致' } };
}  
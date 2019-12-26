import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em { float: right; color: #E05C65; padding-left:10px; }`]
})
export class LoginComponent {
    userName;
    password;
    mouseoverLogin;
    constructor(private authService: AuthService) {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName,
            formValues.password);
    }
}

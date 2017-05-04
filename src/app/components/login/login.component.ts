import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../classes/user';
import { Auth } from '../../providers/auth/auth.service';
import { JwtHelper } from 'angular2-jwt';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrls: ['login.css']
})

export class LoginComponent {
  formSubmit: boolean = false;
  formMsg: string = "";
  model: User = new User();
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    public router: Router,
    public auth: Auth) { }

  login() {
    this.formSubmit = true;
    this.formMsg = '';
    this.auth.login(this.model).then(
      (res) => {
        localStorage.setItem("id_token", res['token']);
        this.router.navigate(['/profile']);
      },
      (err) => {
        this.formSubmit = false;
        this.formMsg = "El usuario no se ha podido identificar";
      }
    )
  }

  register() {
    this.router.navigate(['/signup']);
  }
}

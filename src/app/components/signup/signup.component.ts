import { Auth } from '../../providers/auth/auth.service';
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../classes/user';


@Component({
  moduleId: module.id,
  selector: 'signup',
  templateUrl: 'signup.html',
  styleUrls: ['../login/login.css']
})
export class SignupComponent
{
  formSubmit: boolean = false;
  formMsg: string = ""
  colorMsg: string = "red";
  model: User = new User();

  constructor(public router: Router, public api: Auth) { }

  register()
  {
    this.formSubmit = true;
    this.api.register(this.model).then(
      (res) => {
        this.formSubmit = false;
        this.colorMsg = "green";
        this.formMsg = res['msg'];
      },
      (err) => {
        this.formSubmit = false;
        this.colorMsg = "red";
        this.formMsg = err['msg'];
      }
    )
  }

  login()
  {
    this.router.navigate(["/login"]);
  }
}

import { AuthHttpError } from 'angular2-jwt';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from './../../../providers/user/user.service';
import { User } from './../../../classes/user';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-add',
    templateUrl: 'user_add.html'
})
export class UserAddComponent {
    user: User = new User();
    errorMessage: string;
    formSubmit: boolean = false;
    formMsg: string = "";

    constructor(public userService: UserService, private router: Router) {

    }

    createUser(user: User) {
        
        this.userService.createUser(user).subscribe(
            res => {
                this.formMsg = "El usuario se ha creado correctamente";
                this.user = new User();
            },
            error => {
                this.formMsg = "Ha ocurrido un error procesando el formulario";
            }
        )
    }
}

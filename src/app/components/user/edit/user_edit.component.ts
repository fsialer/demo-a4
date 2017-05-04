import { AuthHttpError } from 'angular2-jwt';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Logger } from 'angular2-logger/core';
import { UserService } from './../../../providers/user/user.service';
import { User } from './../../../classes/user';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-edit',
    templateUrl: 'user_edit.html'
})
export class UserEditComponent {
    user: User = new User();
    errorMessage: string;
    formSubmit: boolean = false;
    formMsg: string = "";
    constructor(
        public userService: UserService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        let id = +this.route.snapshot.params['id'];
        this.userService.getUser(id).subscribe(
            user => {
                this.user = user['user'];
            },
            error => {
                if (error instanceof AuthHttpError) {
                    this.router.navigate(['/']);
                }
            }
        )
    }

    updateUser(user: User) {
        this.userService.updateUser(user).subscribe(
            res => {
                this.formMsg = "Usuario actualizado";
            },
            error => {
                this.formMsg = "Error actualizando";
            }
        )
    }
}

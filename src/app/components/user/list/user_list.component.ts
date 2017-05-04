import { Router } from '@angular/router';
import { AuthHttpError } from 'angular2-jwt';
import { Logger } from 'angular2-logger/core';
import { UserService } from '../../../providers/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../classes/user';


@Component({
    moduleId: module.id,
    selector: 'user-list',
    templateUrl: 'user_list.html',
    styles: [`
        th{
            text-align: center;
        }
    `]
})
export class UserListComponent {
    users: User[];
    msg: string = '';
    constructor(
        public userService: UserService, 
        public router: Router) {}

    ngOnInit()
    {
        this.getUsers();
    }

    getUsers()
    {
        this.userService.getUsers().subscribe(
            users => {
                this.users = users['users'];
            },
            error => {
                if(error instanceof AuthHttpError)
                {
                    this.router.navigate(['/']);
                }
            }
        )
    }

    deleteUser(id: number | string)
    {
        this.userService.deleteUser(id).subscribe(
            res => {
                this.msg = "El usuario se ha eliminado correctamente";
                setTimeout(() => {
                    this.msg = "";
                    this.getUsers();
                }, 2000);
            },
            error => {
                this.msg = "Ha ocurrido un error eliminando el usuario";
            }
        )
    }
}

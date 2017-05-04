import { Observable } from 'rxjs/Rx';
import { UserListComponent } from './../list/user_list.component';
import { Router } from '@angular/router';
import { AuthHttpError } from 'angular2-jwt';
import { UserService } from '../../../providers/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../classes/user';


@Component({
    moduleId: module.id,
    selector: 'paginated',
    templateUrl: 'paginated.html',
    styles: [`
        th{
            text-align: center;
        }
    `]
})
export class PaginatedComponent extends UserListComponent implements OnInit
{
    users: User[];
    errorMessage: string;
    page: number = 1;
    total: number;

    constructor(public userService: UserService, public router: Router)
    {
        super(userService, router);
    }

    ngOnInit()
    {
        this.getUsers();
    }

    getUsers(page: number = 1)
    {
        this.userService.getUserspaginated(page).subscribe(
            users => {
                this.page = page;
                this.users = users['data'];
                this.total = users['count'];
            },
            error => {
                if(error instanceof AuthHttpError)
                {
                    this.router.navigate(['/']);
                }
            }
        )
    }
 }

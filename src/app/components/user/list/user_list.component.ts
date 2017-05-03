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
export class UserListComponent
{

}

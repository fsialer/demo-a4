import { Observable } from 'rxjs/Rx';
import { UserListComponent } from './../list/user_list.component';

import { Router } from '@angular/router';
import { AuthHttpError } from 'angular2-jwt';
import { Logger } from 'angular2-logger/core';
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
export class PaginatedComponent extends UserListComponent
{

}

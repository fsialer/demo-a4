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
export class UserEditComponent 
{ 

}

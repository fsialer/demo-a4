import { Logger } from 'angular2-logger/core';
/*import * as console from 'console';*/
import { JwtHelper } from 'angular2-jwt';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.html'
})
export class ProfileComponent {
    jwtHelper: JwtHelper = new JwtHelper();
    user: any;

    ngOnInit() {
        this.user = this.jwtHelper.decodeToken(localStorage.getItem("id_token"));
    }
}
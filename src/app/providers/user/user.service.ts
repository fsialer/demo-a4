import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../../classes/user';


@Injectable()
export class UserService 
{
    private _apiUrl = 'http://api.laravel5.local:8888/api/';
    private _headers = new Headers;

    constructor(public authHttp: AuthHttp) {
        this._headers.append("Content-type", "application/x-www-form-urlencoded");
        this._headers.append('X-Requested-With', 'XMLHttpRequest');
    }
}

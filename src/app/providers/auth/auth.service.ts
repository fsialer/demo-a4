import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../../classes/user';

@Injectable()
export class Auth 
{
    private _apiUrl = 'http://localhost:8000/api/';
    private _headers = new Headers;

    constructor(private _http: Http, public authHttp: AuthHttp) 
    {
        this._headers.append("Content-type", "application/x-www-form-urlencoded");
        this._headers.append('X-Requested-With', 'XMLHttpRequest');
    }

    login(user: User): Promise<any> 
    {
        return new Promise((resolve, reject) => {
            this._http.post(
                `${this._apiUrl}login`,
                this._parseUser(user), 
                {
                    headers: this._headers
                }
            ).subscribe(
                res => {
                    resolve(res.json());
                },
                error => {
                    reject(error.json());
                }
            )
        })
    }

    register(user: User): Promise<any> 
    {
        return new Promise((resolve, reject) => {
            this._http.post(
                `${this._apiUrl}signup`,
                this._parseUser(user),
                {
                    headers: this._headers
                }
            ).subscribe(
                res => {
                    resolve(res.json());
                },
                error => {
                    reject(error.json());
                }
            )
        })
    }


    private _parseUser(user: any) 
    {
        return Object.keys(user).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(user[k])}`).join('&');
    }

    loggedIn()
    {
        return tokenNotExpired("id_token");
    }
}

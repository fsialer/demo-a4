import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../../classes/user';


@Injectable()
export class UserService {
    private _apiUrl = 'http://localhost:8000/api/';
    private _headers = new Headers;

    constructor(public authHttp: AuthHttp) {
        this._headers.append("Content-type", "application/x-www-form-urlencoded");
        this._headers.append('X-Requested-With', 'XMLHttpRequest');
    }

    getUsers(): Observable<User[]> {
        return this.authHttp.get(`${this._apiUrl}users`)
            .map((response) => response.json()).catch(this.handleError);
    }

    getUserspaginated(page: number | string): Observable<User[]> {
        return this.authHttp.get(`${this._apiUrl}users/paginated/${page}`)
            .map((response) => response.json()).catch(this.handleError);
    }
    getUser(id: number | string): Observable<User[]> {
        return this.authHttp.get(`${this._apiUrl}users/${id}`)
            .map((response) => response.json()).catch(this.handleError);
    }
    createUser(user: User): Observable<any>
    { 
        
        return this.authHttp.post(`${this._apiUrl}users`, this._parseUser(user))
                .map((response) => response.json())
                .catch(this.handleError);
    }
   
    updateUser(user: User): Observable<User[]> {
        return this.authHttp.put(`${this._apiUrl}users/${user.id}`,this._parseUser(user))
            .map((response) => response.json()).catch(this.handleError);
    }
    deleteUser(id: number | string): Observable<any> {
        return this.authHttp.delete(`${this._apiUrl}users/${id}`)
            .map((response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(error);
    }

    private _parseUser(user: any) {
        return Object.keys(user).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(user[k])}`).join('&');
    }
}

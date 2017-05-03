import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Auth } from '../providers/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private auth: Auth,
        private router: Router
    ) { }


    canActivate() {
        if(this.auth.loggedIn())
            return true;
        
        this.router.navigate(['/login']);
        return false;

    }
    canActivateChild() {
       if(this.auth.loggedIn())
            return true;
        this.router.navigate(['/login']);
        return false;
    }



}
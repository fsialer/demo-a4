import { Observable } from 'rxjs/Rx';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Auth } from './../../providers/auth/auth.service';
import { Logger } from 'angular2-logger/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
       <nav [hidden]="!auth.loggedIn()">
            <div>
            <a href="#" class="brand-logo left">Angular 2 App</a>
            <ul class="right">
                <li [ngClass]="{'active': currentUrl == '/profile'}"><a routerLink="/profile">Profile</a></li>
                <li [ngClass]="{'active': currentUrl == '/users'}"><a routerLink="/users">Users section</a></li>
                <li [ngClass]="{'active': currentUrl == '/users/paginated'}"><a routerLink="/users/paginated">Users paginated</a></li>
                <li><a (click)="logout()">Logout</a></li>
            </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    jwtHelper: JwtHelper = new JwtHelper();
    currentUrl: string = "/";
    constructor(
        public auth: Auth,
        public router: Router
    ) {
        router.events.forEach((event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
                this.currentUrl = event.url;
            }
        });
    }

    logout() {
        localStorage.removeItem('id_token');
        this.router.navigate(['/']);
    }

}

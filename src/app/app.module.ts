import { UserService } from './providers/user/user.service';
import { AuthGuard } from './guard/auth_guard.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { Auth } from './providers/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';

import { components } from './components/index';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { HttpModule, XHRBackend, Http, RequestOptions } from '@angular/http';

import { Logger } from "angular2-logger/core"; // ADD THIS

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { InterceptorXHRBackend } from './providers/interceptor/interceptor.service';

import { Ng2PaginationModule } from 'ng2-pagination';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'id_token',
    tokenGetter: (() => localStorage.getItem('id_token')),
    globalHeaders: [
      {
        'Content-type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      }
    ],
  }), http, options);
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule
  ],
  declarations: [
    AppComponent,
    components
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: XHRBackend, useClass: InterceptorXHRBackend },
    Auth,
    AuthGuard,
    UserService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],

})
export class AppModule { }

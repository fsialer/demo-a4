import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,XHRBackend } from '@angular/http';

import { UserService } from './providers/user/user.service';
import { AuthGuard } from './guard/auth_guard.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { Auth } from './providers/auth/auth.service';


import { AppComponent }  from './components/app/app.component';
import { components } from './components/index';

import { AUTH_PROVIDERS,provideAuth } from 'angular2-jwt';

import { Logger } from "angular2-logger/core"; // ADD THIS

import { InterceptorXHRBackend } from './providers/interceptor/interceptor.service';

import {Ng2PaginationModule} from 'ng2-pagination'; 

@NgModule({
  declarations: [
    AppComponent,
    components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule
  ],
  providers: [
    {provide: XHRBackend, useClass: InterceptorXHRBackend},
    AUTH_PROVIDERS, 
    Auth, 
    AuthGuard,
    Logger, 
    UserService,
    provideAuth({
      tokenGetter: () => localStorage.getItem('id_token')     
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

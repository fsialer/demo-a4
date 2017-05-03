import { PaginatedComponent } from '../components/user/paginated/paginated.component';
import { UserRootComponent } from './../components/user/root/user-root.component';
import { UserEditComponent } from './../components/user/edit/user_edit.component';
import { UserAddComponent } from './../components/user/add/user_add.component';
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { AuthGuard } from './../guard/auth_guard.service';
import { UserListComponent } from './../components/user/list/user_list.component';
import { SignupComponent } from '../components/signup/signup.component';
import { LoginComponent } from './../components/login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'signup',
            component: SignupComponent
        },
        {
            path: 'users',
            component: UserRootComponent,
            canActivate: [AuthGuard],
            canActivateChild: [AuthGuard],
            children: [
                {
                    path: '',
                    component: UserListComponent
                },    
                {
                    path: 'paginated',
                    component: PaginatedComponent
                },
                {
                    path: 'add',
                    component: UserAddComponent
                },
                {
                    path: 'edit/:id',
                    component: UserEditComponent
                }
            ]
        },
        {
            path: 'profile',
            component: ProfileComponent,
            canActivate: [AuthGuard],
        },
        {
            path: '',
            component: LoginComponent
        }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
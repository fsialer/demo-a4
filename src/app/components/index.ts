import { PaginatedComponent } from './user/paginated/paginated.component';
import { UserRootComponent } from './user/root/user-root.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user/list/user_list.component';
import { UserEditComponent } from './user/edit/user_edit.component';
import { UserAddComponent } from './user/add/user_add.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const components: any = [
    UserListComponent,
    UserEditComponent,
    UserAddComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    PreloaderComponent,
    PaginatedComponent,
    UserRootComponent
];
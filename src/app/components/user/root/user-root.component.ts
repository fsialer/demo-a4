import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user-root',
    template: `
        <h2 class="center">Admin Users</h2>
        <hr />
        <router-outlet></router-outlet>
    `
})
export class UserRootComponent { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    constructor(private router: Router) { }

    onChangeSubreddit(route: string): void {
        const urlArray = (this.router.url).split('/');
        this.router.navigate([route, urlArray[urlArray.length - 1]]);
    }

}

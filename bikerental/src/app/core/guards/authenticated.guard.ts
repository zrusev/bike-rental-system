import { AuthService } from '../services/auth.service';
import { Router, Route, UrlSegment, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canLoad(route: Route, state: UrlSegment[]) {
        if (this.authService.isAuthorized(route.path)) {
            return true;
        }

        this.router.navigate([ '/home' ]);
        return false;
    }
}

import { AuthService } from '../services/auth.service';
import { Router, Route, UrlSegment, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from 'src/app/components/shared/models/IAuthor';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canLoad(route: Route, state: UrlSegment[]): Observable<boolean> {
        return this.authService.getUser(this.authService.userId)
            .pipe(map((usr: IAuthor) => {
                return usr.roles.map(r => r.toLowerCase()).includes(route.path.toLowerCase());
            }));
    }
}

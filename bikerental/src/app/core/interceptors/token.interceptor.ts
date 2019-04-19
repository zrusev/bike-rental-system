import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor
 } from '@angular/common/http';
import { APP_KEY, APP_SECRET, APP_MASTER_SECRET } from '../../kinvey.tokens';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if(req.method === 'GET' && req.url.endsWith(`/user/${APP_KEY}`)) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_MASTER_SECRET}`)}`,
                    'Content-Type': 'application/json'
                }
            });
        } else if (req.url.endsWith(`/user/${APP_KEY}`) || req.url.endsWith('login')) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                    'Content-Type': 'application/json'
                }
            });
        } else {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${this.authService.token}`
                }
            });
        }
        return next.handle(req);
    }
}

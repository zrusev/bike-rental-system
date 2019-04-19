import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class SeedService {
  constructor(private authService: AuthService) { }

  load(): Promise<any> {
      return this.authService
      .getUsers()
      .toPromise()
      .then((data: any[]) => {
        if (!data.length) {
            this.authService.signUp({
              email: 'admin@admin.com',
              username: 'admin@admin.com',
              password: 'admin',
              firstname: 'Admin',
              lastname: 'Admin',
              name: 'Admin Admin',
              roles: ['Admin']
            }).subscribe();
        }
    });
  }
}

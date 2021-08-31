import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

import { sha256 } from '../utils';
import type { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private dbService: NgxIndexedDBService) { }

  public async login(email: string, password: string): Promise<IUser> {
    const user = await this.dbService.getByIndex<IUser>('users', 'email', email).toPromise();
    console.log('user', user);
    if (!user) throw new Error('User not found');
    const hash = await sha256(password);
    if (hash !== user.password) throw new Error('Invalid password');

    return user;
  }

  public register({ firstName, lastName, email, password }: {
    firstName: string,
    lastName: string,
    email: string,
    password: string
  }): void {

    this.dbService.addItem('users', {
      firstName,
      lastName,
      email,
      password
    }).subscribe((item) => {
      console.log('item: ', item);
    });
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { map, Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _auth: AuthService,
    private readonly _router: Router,
  ) { }

  public canActivate(): Observable<true | UrlTree> {
    return this._auth.user$.pipe(map(
      user => user
        ? true
        : this._router.createUrlTree(['auth']),
    ));
  }
}

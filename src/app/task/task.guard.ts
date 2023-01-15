import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';

import { StorageService } from '@services';

import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskGuard implements CanActivate {
  constructor(
    private readonly _storage: StorageService,
    private readonly _router: Router,
  ) { }

  public canActivate(route: ActivatedRouteSnapshot): UrlTree | Observable<true | UrlTree> {
    const ROOT = this._router.createUrlTree(['']);

    const id = route.paramMap.get('id');

    if (id === null) return ROOT;

    return this._storage.has(id).pipe(map(has => has || ROOT));
  }
}

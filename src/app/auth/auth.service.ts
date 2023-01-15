import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, doc, docData, DocumentReference, Firestore } from '@angular/fire/firestore';

import { Observable, of, tap } from 'rxjs';

import { LocalStorage } from '../helpers';
import { eager } from '../utils';
import { User } from './models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public readonly user$: Observable<User | null>;

  public user?: User;

  constructor(private readonly _store: Firestore) {
    const userId = LocalStorage.get<number>('userId');
    this.user$ = userId ? this._getUser(userId) : of(null);
  }

  public isLogin(): boolean {
    return Boolean(this.user);
  }

  public getList(): Observable<User[]> {
    const col = collection(this._store, 'users') as CollectionReference<User>;

    return collectionData(col, { idField: 'id' });
  }

  private _getUser(userId: number): Observable<User> {
    const document = doc(this._store, 'users', String(userId)) as DocumentReference<User>;

    const user$ = docData(document, { idField: 'id' })
      .pipe(tap(user => this.user = user));

    return eager(user$);
  }
}

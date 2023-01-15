import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

import { LocalStorage } from '../helpers';
import { User } from './models';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  protected readonly users$: Observable<User[]>;

  constructor(
    private readonly _router: Router,
    servise: AuthService,
  ) {
    this.users$ = servise.getList();
  }

  public select(user: User): void {
    LocalStorage.set('userId', user.id);
    this._router.navigate(['../'], { replaceUrl: true });
  }
}

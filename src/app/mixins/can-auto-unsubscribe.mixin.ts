import { Directive, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { AbstractCtor, Constructor } from './constructor';

export type CanAutoUnsubscribe = {
  oneMoreSubscription: Subscription;
  ngOnDestroy(): void;
};

export type CanAutoUnsubscribeCtor = AbstractCtor<CanAutoUnsubscribe>;

export function mixinAutoUnsubscribe<TBase extends Constructor>(
  Base: TBase,
): CanAutoUnsubscribeCtor & TBase {
  @Directive()
  abstract class CanAutoUnsubscribe extends Base implements CanAutoUnsubscribe, OnDestroy {
    private readonly _canAutoUnsubscribeSubscriptions = new Subscription();

    public set oneMoreSubscription(sub: Subscription) {
      this._canAutoUnsubscribeSubscriptions.add(sub);
    }

    ngOnDestroy(): void {
      this._canAutoUnsubscribeSubscriptions.unsubscribe();
    }
  }

  return CanAutoUnsubscribe;
}

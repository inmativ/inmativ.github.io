import { Observable, ReplaySubject } from 'rxjs';

export function eager<T>(stream$: Observable<T>): ReplaySubject<T> {
  const subj = new ReplaySubject<T>(1);

  // eslint-disable-next-line rxjs/no-ignored-subscription
  stream$.subscribe(subj);

  return subj;
}

import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { mixinAutoUnsubscribe } from '@mixin';
import { NewTask, Task } from '@models';
import { StorageService } from '@services';

import { combineLatest, filter, map, Observable, switchMap, tap } from 'rxjs';

const Base = mixinAutoUnsubscribe(class { });

@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTaskComponent extends Base implements OnDestroy {
  protected name$: Observable<Task['name']>;

  protected subTaskList$: Observable<Task[]>;

  private _id?: string;

  constructor(
    private readonly _storage: StorageService,
    route: ActivatedRoute,
  ) {
    super();

    const id$ = route.params.pipe(
      map(({ id }): string => id),
      tap(id => this._id = id),
    );

    this.name$ = id$.pipe(
      switchMap(id => this._storage.get(id)),
      filter(Boolean),
      map(task => task.name),
    );

    this.subTaskList$ = this._getSubTaskList(id$);
  }

  protected addSubTask(newTask: NewTask): void {
    this._storage.add(newTask, this._id);
  }

  private _getSubTaskList(id$: Observable<string>): Observable<Task[]> {
    return combineLatest([id$, this._storage.taskList$]).pipe(
      map(([id, taskList]) => taskList.filter(task => task.parentId === id)),
    );
  }
}

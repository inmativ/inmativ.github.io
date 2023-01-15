import { Injectable } from '@angular/core';
import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';

import { collection, CollectionReference } from '@firebase/firestore';
import { eager } from '@utils/eager.util';

import { map, Observable, take } from 'rxjs';

import { NewTask, Task, TaskId } from '../models';

@Injectable({ providedIn: 'root' })
export class StorageService {
  public readonly taskList$: Observable<Task[]>;

  constructor(private readonly _store: Firestore) {
    this.taskList$ = this._getAll();
  }

  public has(id: TaskId): Observable<boolean> {
    return this.taskList$.pipe(
      take(1),
      map(list => list.some(task => task.id === id)),
    );
  }

  public get(id: TaskId): Observable<Task | undefined> {
    return this.taskList$.pipe(map(list => list.find(task => task.id === id)));
  }

  public add(task: NewTask, parentId?: TaskId): void {
    if (parentId) {
      task.parentId = parentId;
    }

    const col = collection(this._store, 'task');
    addDoc(col, task);
  }

  private _getAll(): Observable<Task[]> {
    const col = collection(this._store, 'task') as CollectionReference<Task>;

    const taskList$ = collectionData(col, { idField: 'id' });

    return eager(taskList$);
  }
}

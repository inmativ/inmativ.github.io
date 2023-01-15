import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NewTask, Task } from '@models';
import { StorageService } from '@services';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTaskComponent {
  protected list$: Observable<Task[]>;

  constructor(private readonly _storage: StorageService) {
    this.list$ = _storage.taskList$;
  }

  protected addTask(newTask: NewTask): void {
    this._storage.add(newTask);
  }
}

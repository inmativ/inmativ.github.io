import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { assert } from '@utils';

import { AuthService } from '../../../auth';
import { NewTask } from '../../../models';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  @Output()
  public readonly newTask = new EventEmitter<NewTask>();

  protected readonly taskName = new FormControl('');

  constructor(private readonly _auth: AuthService) { }

  protected submit(): void {
    const name = this.taskName.value;
    if (!name) return;

    const executorId = this._auth.user?.id;
    assert(executorId);

    this.newTask.emit({ name, executorId, children: [] });
    this.taskName.reset();
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Task } from '@models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  @Input()
  public list: Task[] = [];
}

import { UserId } from '../auth/models';

export type NewTask = {
  name: string;
  executorId: UserId;
  parentId?: TaskId;
  children: TaskId[];
};

export type Task = NewTask & { id: TaskId };

export type TaskId = string;

export type TodoModel = {
  title?: string;
  status?: StatusEnum;
  tasks: TaskModel[];
  id?: number
}

export type TaskModel = {
  label: string;
  done: boolean;
}

export enum StatusEnum {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed'
};

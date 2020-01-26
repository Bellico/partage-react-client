export type Todo = {
  title?: string;
  status?: StatusEnum;
  tasks: Task[];
  id?: number
}

export type Task = {
  label: string;
  done: boolean;
}

export enum StatusEnum {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed'
};

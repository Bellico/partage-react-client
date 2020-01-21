export class Todo {
  title?: string;
  status?: StatusEnum;
  tasks: Task[];
}

export class Task {
  label: string;
  done: boolean;
}

export enum StatusEnum {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed'
};

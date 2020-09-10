export interface PeriodicElement {
  listName: string;
  date: string;
  entities: number;
  actions: IActions;
  details: Array<string>;
}

export interface IActions {
  mail: boolean,
  share?: boolean,
  edit?: boolean,
  delete?: boolean
}

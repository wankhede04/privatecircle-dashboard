import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  listName: string;
  date: string;
  entities: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '1 Jul', listName: 'Hydrogen Lelo, lavda lelo..', entities: 1, actions: 'H'},
  {date: '2 Jul', listName: 'Helium', entities: 4, actions: 'He'},
  {date: '3 Jul', listName: 'Lithium', entities: 6, actions: 'Li'},
  {date: '4 Jul', listName: 'Beryllium', entities: 9, actions: 'Be'},
  {date: '5 Jul', listName: 'Boron', entities: 811, actions: 'B'},
  {date: '6 Jul', listName: 'Carbon', entities: 12, actions: 'C'},
  {date: '7 Jul', listName: 'Nitrogen', entities: 14, actions: 'N'},
  {date: '8 Jul', listName: 'Oxygen', entities: 994, actions: 'O'},
  {date: '9 Jul', listName: 'Fluorine', entities: 18, actions: 'F'},
  {date: '10 Jul', listName: 'Neon', entities: 20, actions: 'Ne'},
  {date: '10 Jul', listName: 'Neon', entities: 20, actions: 'Ne'},
  {date: '10 Jul', listName: 'Neon', entities: 20, actions: 'Ne'},
  {date: '10 Jul', listName: 'Neon', entities: 20, actions: 'Ne'},
  {date: '10 Jul', listName: 'Neon', entities: 20, actions: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public displayedColumns: string[] = ['date', 'listName', 'entities', 'actions', 'details'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

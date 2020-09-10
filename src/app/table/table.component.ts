import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PeriodicElement } from '../models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  public displayedColumns: string[] = ['date', 'listName', 'entities', 'actions', 'details'];

  @Input()
  public searchString: string;

  @Input()
  public tableData: PeriodicElement[];

  @Output()
  public detailsEvent: EventEmitter<Array<string>> = new EventEmitter();

  public dataSource: MatTableDataSource<PeriodicElement>

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.tableData);
    if (this.searchString) {
      this.dataSource.filter = this.searchString.trim().toLowerCase();
    }
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public showIndustryDetails(details: Array<string>) {
    this.detailsEvent.emit(details)
  }
}

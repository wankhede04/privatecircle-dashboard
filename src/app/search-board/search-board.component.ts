import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-board',
  templateUrl: './search-board.component.html',
  styleUrls: ['./search-board.component.scss']
})
export class SearchBoardComponent implements OnInit {
  @Output()
  public searchFilter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public applyFilter(keyword: string) {
    this.searchFilter.emit(keyword);
  }
}

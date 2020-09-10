import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../services/industry.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dataValues$: Observable<any>;
  public selectedIndustryDetails: Array<string>;
  public searchKeyword: string;
  public buttonClicked: Array<boolean> = [true, false, false];

  constructor(private industryService: IndustryService) { }

  ngOnInit() {
    this.dataValues$ = this.industryService.getIndustryDetails();
  }

  public getSearchKeyword(keyword: string) {
    this.searchKeyword = keyword;
  }

  public getDetailsEvent(event) {
    this.selectedIndustryDetails = event;
  }

  public onButtonClicked(position: number) {
    this.buttonClicked.forEach((item, index) => {
      if (index === position) {
        this.buttonClicked[position] = true;
      } else {
        this.buttonClicked[index] = false;
      }
    });
  }
}

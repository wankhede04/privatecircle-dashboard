import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(
    private http: HttpClient
  ) { }

  public getIndustryDetails(): Observable<any> {
    return this.http.get('assets/json/industry-details.json');
  }
}

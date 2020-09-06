import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from '../table/table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [TableComponent]
})
export class MaterialModule { }

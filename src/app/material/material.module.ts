import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from '../table/table.component';
import { DescriptionComponent } from '../description/description.component';
import { SearchBoardComponent } from '../search-board/search-board.component';
import { ButtonComponent } from '../button/button.component';

@NgModule({
  declarations: [
    TableComponent,
    DescriptionComponent,
    SearchBoardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TableComponent,
    DescriptionComponent,
    SearchBoardComponent,
    ButtonComponent
  ]
})
export class MaterialModule { }

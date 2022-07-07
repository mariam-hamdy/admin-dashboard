import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }

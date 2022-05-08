import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatSnackBarModule  ],
  exports: [MatCardModule, MatTableModule, MatDialogModule, MatInputModule, MatButtonModule , FlexLayoutModule,MatSnackBarModule, MatIconModule]
})
export class SharedModuleModule { }

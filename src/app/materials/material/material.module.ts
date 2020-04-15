import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }

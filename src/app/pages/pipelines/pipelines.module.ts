import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelinesComponent } from './pipelines.component';
import { AddEditPipelinesComponent } from './dialogs/add-edit-pipelines/add-edit-pipelines.component';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PipelinesComponent,
    AddEditPipelinesComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PipelinesComponent,
      }
    ]),
  ],
  entryComponents: [
    AddEditPipelinesComponent
  ]
})
export class PipelinesModule { }

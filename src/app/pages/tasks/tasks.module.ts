import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { AddEditTaskComponent } from './dialogs/add-edit-task/add-edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  declarations: [
    TasksComponent,
    AddEditTaskComponent
  ],
  
  imports: [
    CommonModule,
    InlineSVGModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent,
      }
    ]),
  ],
  entryComponents: [
    AddEditTaskComponent
  ]
})
export class TasksModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyPairComponent } from './key-pair.component';
import { AddEditKeyPairComponent } from './dialogs/add-edit-key-pair/add-edit-key-pair.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  declarations: [
    KeyPairComponent,
    AddEditKeyPairComponent
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
        component: KeyPairComponent,
      }
    ]),
  ],
  entryComponents: [AddEditKeyPairComponent]
})
export class KeyPairModule { }

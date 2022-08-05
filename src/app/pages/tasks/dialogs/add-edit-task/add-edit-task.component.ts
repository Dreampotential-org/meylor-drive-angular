import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { GlobalService } from 'src/app/helpers/global.service';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {


  addEditForm: FormGroup;
  editMode = false;

  constructor(public dialog: MatDialogRef<AddEditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private globalService: GlobalService, private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.initializeForm();
    if (this.data.id) {
      this.editMode = true;
      this.addEditForm.patchValue(this.data);
    }
  }

  initializeForm() {
    this.addEditForm = this.formBuilder.group(
      {
        id: [null],
        status: [null],
        command: [null],
        started_at: [null],
        finished_at: [null],
        repo: [null],
        name: [null],
        meta: [null],
        user: [null]
      }
    )
  }

  createNewTasks() {
    const obj = this.addEditForm.value;
    this.apiService.postCall(apiUrls.createTasks, obj)
      .subscribe((res: any) => {
        this.dialog.close(true);
      });
  }

  updateTasks() {
    const obj = this.addEditForm.value;
    this.apiService.putCall(apiUrls.updateTasks + obj.id, obj)
      .subscribe((res: any) => {
        this.dialog.close(true);
      });
  }
}

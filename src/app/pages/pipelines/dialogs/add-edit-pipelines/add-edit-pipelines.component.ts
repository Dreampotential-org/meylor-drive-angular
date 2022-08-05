import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-edit-pipelines',
  templateUrl: './add-edit-pipelines.component.html',
  styleUrls: ['./add-edit-pipelines.component.scss']
})
export class AddEditPipelinesComponent implements OnInit {

  addEditForm: FormGroup;
  envVariablesFormArray: FormArray;
  editMode = false;
  tasks = [] as any;

  constructor(public dialog: MatDialogRef<AddEditPipelinesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchTasks();
    this.initializeForm();
    if (this.data.id) {
      this.editMode = true;
      this.addEditForm.patchValue(this.data);
      if (this.data.environment_variable) {
        const keys = Object.keys(this.data.environment_variable);
        const values = Object.values(this.data.environment_variable);
        keys.forEach((k: any, index) => {
          this.envVariablesFormArray.push(this.newEnvVariable(k, values[index] as any));
        });
      }
    }
  }

  initializeForm() {
    this.addEditForm = this.formBuilder.group({
        id: [null],
        name: [null, Validators.required],
        description: [null, Validators.required],
        repo: [null, Validators.required],
        environmentVariable: new FormArray([]),
        status: [null],
        task: [null]
    });
    this.envVariablesFormArray = (this.addEditForm.get('environmentVariable')) as FormArray;
  }

  addNewVariable() {
    this.envVariablesFormArray.push(this.newEnvVariable());
  }

  removeEnvVariable(index: number) {
    this.envVariablesFormArray.removeAt(index);
  }

  newEnvVariable(name = null, val = null) {
    return new FormGroup({
      envName: new FormControl(name, Validators.required),
      envValue: new FormControl(val, Validators.required)
    });
  }

  createNewPipeline() {
    const obj = this.addEditForm.value;
    obj.environment_variable = this.populateEnvVariables();
    this.apiService.postCall(apiUrls.createPipeline, obj)
    .subscribe((res: any) => {
      this.dialog.close(true);
    });
  }

  updatePipeline() {
    const obj = this.addEditForm.value;
    obj.environment_variable = this.populateEnvVariables();
    this.apiService.putCall(apiUrls.updatePipeline + obj.id + '/', obj)
    .subscribe((res: any) => {
      this.dialog.close(true);
    });
  }

  populateEnvVariables() {
    const envVariables = {} as any;
    for (let i = 0; i < this.envVariablesFormArray.length; i++) {
      envVariables[this.envVariablesFormArray.controls[i].get('envName')?.value] = this.envVariablesFormArray.controls[i].get('envValue')?.value
    }
    return envVariables;
  }

  fetchTasks() {
    this.apiService.getCall(apiUrls.tasksListing)
    .subscribe((res: any) => {
      this.tasks = res;
    });
  }
}

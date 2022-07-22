import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  addEditForm: FormGroup;
  editMode = false;
  
  constructor(public dialog: MatDialogRef<AddEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.initializeForm();
    if (this.data.id) {
      this.editMode = true;
      this.addEditForm.patchValue(this.data);
      this.addEditForm.get('password')?.removeValidators(Validators.required);
      this.addEditForm.get('password')?.disable();
    }
  }

  initializeForm() {
    this.addEditForm = this.formBuilder.group(
      {
        id: [null],
        username: [null],
        name: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(320),
          ]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ]
      }
    );
  }

  createNewUser() {
    const obj = this.addEditForm.value;
    this.apiService.postCall(apiUrls.register, obj)
    .subscribe((res: any) => {
      this.dialog.close(true);
    });
  }

  updateUser() {
    const obj = this.addEditForm.value;
    this.apiService.putCall(apiUrls.updateUser + obj.id, obj)
    .subscribe((res: any) => {
      this.dialog.close(true);
    });
  }

}

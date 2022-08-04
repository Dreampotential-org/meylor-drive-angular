import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-edit-key-pair',
  templateUrl: './add-edit-key-pair.component.html',
  styleUrls: ['./add-edit-key-pair.component.scss']
})
export class AddEditKeyPairComponent implements OnInit {

  addEditForm: FormGroup;
  editMode = false;
  users = [] as any;
  
  constructor(public dialog: MatDialogRef<AddEditKeyPairComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    // this.fetchUsers();
    this.initializeForm();
    if (this.data.id) {
      this.editMode = true;
      this.addEditForm.patchValue(this.data);
    }
  }

  initializeForm() {
    this.addEditForm = this.formBuilder.group({
      id: [null],
      value: [null, Validators.required],
      user: [null]
    });
  }

  createNewKeyPair() {
    const obj = this.addEditForm.value;
    this.apiService.postCall(apiUrls.createKeyPair, obj)
    .subscribe((res: any) => {
      this.dialog.close(true);
    });
  }

  updateKeyPair() {
    const obj = this.addEditForm.value;
    this.apiService.putCall(apiUrls.updateKeyPair + obj.id + '/', obj)
    .subscribe((res: any) => {
      this.dialog.close(true);
    });
  }

  fetchUsers() {
    this.apiService.getCall(apiUrls.usersListing)
    .subscribe((res: any) => {
      this.users = res;
    });
  }

}

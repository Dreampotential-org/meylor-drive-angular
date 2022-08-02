import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { GlobalService } from 'src/app/helpers/global.service';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-edit-server',
  templateUrl: './add-edit-server.component.html',
  styleUrls: ['./add-edit-server.component.scss']
})
export class AddEditServerComponent implements OnInit {

  addEditForm: FormGroup;
  editMode = false;
  users = [] as any;

  constructor(public dialog: MatDialogRef<AddEditServerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private globalService: GlobalService, private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchUsers();
    this.initializeForm();
    if (this.data.id) {
      this.editMode = true;
      this.addEditForm.patchValue(this.data);
    } else {
      this.globalService.fetchIpAdress()
      .then((v) => {
        this.addEditForm.get('ip_address')?.setValue(v);
      });
    }
  }

  initializeForm() {
    this.addEditForm = this.formBuilder.group({
      id: [null],
      ip_address: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
      name: [null, Validators.required],
      error: [false],
      alive: [false],
      in_use: [false],
      user: [null],
      system_specs: [null]
    });
  }

  createNewServer() {
    const obj = this.addEditForm.value;
    this.apiService.postCall(apiUrls.createServer, obj)
    .subscribe((res: any) => {
      this.dialog.close(true);
    });
  }

  updateServer() {
    const obj = this.addEditForm.value;
    this.apiService.putCall(apiUrls.updateServer + obj.id, obj)
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

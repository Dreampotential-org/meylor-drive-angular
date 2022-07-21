import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUserComponent } from './dialogs/add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createUser() {
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

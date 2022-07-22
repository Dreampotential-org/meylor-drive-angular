import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { ApiService } from 'src/app/services/api-service.service';
import { AddEditUserComponent } from './dialogs/add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersListing = [] as any;

  constructor(private dialog: MatDialog, private apiService: ApiService, private changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchUsersListing();
  }

  fetchUsersListing() {
    this.apiService.getCall(apiUrls.usersListing)
    .subscribe((res: any) => {
      this.usersListing = res;
      this.changeDetectionRef.detectChanges();
    });
  }

  createUser(obj = {}) {
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '500px',
      data: obj
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      result && this.fetchUsersListing();
    });
  }

  deleteUser(id: any, index: any) {
    this.apiService.deleteCall(apiUrls.deleteUser + id)
    .subscribe((res: any) => {
      this.usersListing.splice(index, 1);
      this.changeDetectionRef.detectChanges();
    });
  }

}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { ApiService } from 'src/app/services/api-service.service';
import { AddEditKeyPairComponent } from './dialogs/add-edit-key-pair/add-edit-key-pair.component';

@Component({
  selector: 'app-key-pair',
  templateUrl: './key-pair.component.html',
  styleUrls: ['./key-pair.component.scss']
})
export class KeyPairComponent implements OnInit {

  keyPairs = [] as any;

  constructor(private apiService: ApiService, private changeDetectionRef: ChangeDetectorRef, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchListing();
  }

  fetchListing() {
    this.apiService.getCall(apiUrls.keyPairListing)
    .subscribe((res: any) => {
      this.keyPairs = res;
      this.changeDetectionRef.detectChanges();
    });
  }

  createKeyPair(obj = {}) {
    const dialogRef = this.dialog.open(AddEditKeyPairComponent, {
      width: '650px',
      data: obj
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      result && this.fetchListing();
    });
  }

  deleteKeyPair(id: any, index: any) {
    this.apiService.deleteCall(apiUrls.deleteKeyPair + id + '/')
    .subscribe((res: any) => {
      this.keyPairs.splice(index, 1);
      this.changeDetectionRef.detectChanges();
    });
  }

}

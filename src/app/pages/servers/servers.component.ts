import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { ApiService } from 'src/app/services/api-service.service';
import { AddEditServerComponent } from './dialogs/add-edit-server/add-edit-server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  servers = [] as any;

  constructor(private apiService: ApiService, private changeDetectionRef: ChangeDetectorRef, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchServers();
  }

  fetchServers() {
    this.apiService.getCall(apiUrls.serversListing)
    .subscribe((res: any) => {
      this.servers = res;
      this.changeDetectionRef.detectChanges();
    });
  }

  createServer(obj = {}) {
    const dialogRef = this.dialog.open(AddEditServerComponent, {
      width: '650px',
      data: obj
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      result && this.fetchServers();
    });
  }

  deleteServer(id: any, index: any) {
    this.apiService.deleteCall(apiUrls.deleteServer + id + '/')
    .subscribe((res: any) => {
      this.servers.splice(index, 1);
      this.changeDetectionRef.detectChanges();
    });
  }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { ApiService } from 'src/app/services/api-service.service';
import { AddEditPipelinesComponent } from './dialogs/add-edit-pipelines/add-edit-pipelines.component';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.scss']
})
export class PipelinesComponent implements OnInit {

  pipelines = [] as any;

  constructor(private apiService: ApiService, private changeDetectionRef: ChangeDetectorRef, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchPipelines();
  }

  fetchPipelines() {
    this.apiService.getCall(apiUrls.pipelinesListing)
    .subscribe((res: any) => {
      this.pipelines = res;
      this.changeDetectionRef.detectChanges();
    });
  }

  createPipeline(obj = {}) {
    const dialogRef = this.dialog.open(AddEditPipelinesComponent, {
      width: '650px',
      data: obj
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      result && this.fetchPipelines();
    });
  }

  deletePipeline(id: any, index: any) {
    this.apiService.deleteCall(apiUrls.deletePipeline + id + '/')
    .subscribe((res: any) => {
      this.pipelines.splice(index, 1);
      this.changeDetectionRef.detectChanges();
    });
  }

}

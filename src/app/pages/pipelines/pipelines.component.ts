import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  fetchPipelines() {
    // this.apiService.getCall(apiUrls.)
  }

  createPipeline() {
    const dialogRef = this.dialog.open(AddEditPipelinesComponent, {
      width: '650px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

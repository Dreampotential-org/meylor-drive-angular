import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-pipelines',
  templateUrl: './add-edit-pipelines.component.html',
  styleUrls: ['./add-edit-pipelines.component.scss']
})
export class AddEditPipelinesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}

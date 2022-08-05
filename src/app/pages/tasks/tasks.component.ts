import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { apiUrls } from 'src/app/constants/apiUrls';
import { ApiService } from 'src/app/services/api-service.service';
import { AddEditTaskComponent } from './dialogs/add-edit-task/add-edit-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

 
  tasks = [] as any;

  constructor(private apiService: ApiService, private changeDetectionRef: ChangeDetectorRef, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.apiService.getCall(apiUrls.tasksListing)
    .subscribe((res: any) => {
      this.tasks = res;
      this.changeDetectionRef.detectChanges();
    });
  }

  createTask(obj = {}) {
    const dialogRef = this.dialog.open(AddEditTaskComponent, {
      width: '650px',
      data: obj
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      result && this.fetchTasks();
    });
  }

  deleteTask(id: any, index: any) {
    this.apiService.deleteCall(apiUrls.deleteTasks + id + '/')
    .subscribe((res: any) => {
      this.tasks.splice(index, 1);
      this.changeDetectionRef.detectChanges();
    });
  }
}

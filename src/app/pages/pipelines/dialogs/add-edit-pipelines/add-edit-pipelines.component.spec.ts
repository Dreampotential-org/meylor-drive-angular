import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPipelinesComponent } from './add-edit-pipelines.component';

describe('AddEditPipelinesComponent', () => {
  let component: AddEditPipelinesComponent;
  let fixture: ComponentFixture<AddEditPipelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPipelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

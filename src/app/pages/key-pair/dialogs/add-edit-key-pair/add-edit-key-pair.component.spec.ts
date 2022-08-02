import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKeyPairComponent } from './add-edit-key-pair.component';

describe('AddEditKeyPairComponent', () => {
  let component: AddEditKeyPairComponent;
  let fixture: ComponentFixture<AddEditKeyPairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditKeyPairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditKeyPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

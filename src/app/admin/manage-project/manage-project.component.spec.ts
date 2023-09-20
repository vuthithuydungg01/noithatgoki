import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectComponent } from './manage-project.component';

describe('ManageProjectComponent', () => {
  let component: ManageProjectComponent;
  let fixture: ComponentFixture<ManageProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProjectComponent]
    });
    fixture = TestBed.createComponent(ManageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
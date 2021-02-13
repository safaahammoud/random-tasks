import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDataComponent } from './tasks-data.component';

describe('TasksDataComponent', () => {
  let component: TasksDataComponent;
  let fixture: ComponentFixture<TasksDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

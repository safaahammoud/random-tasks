import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksLoadingComponent } from './tasks-loading.component';

describe('TasksLoadingComponent', () => {
  let component: TasksLoadingComponent;
  let fixture: ComponentFixture<TasksLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

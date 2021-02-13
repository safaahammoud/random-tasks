import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksEmptyComponent } from './tasks-empty.component';

describe('TasksEmptyComponent', () => {
  let component: TasksEmptyComponent;
  let fixture: ComponentFixture<TasksEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

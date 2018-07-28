import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComposeComponent } from './tasks-compose.component';

describe('TasksComposeComponent', () => {
  let component: TasksComposeComponent;
  let fixture: ComponentFixture<TasksComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

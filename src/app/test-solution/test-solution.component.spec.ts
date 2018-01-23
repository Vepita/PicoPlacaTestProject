import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSolutionComponent } from './test-solution.component';

describe('TestSolutionComponent', () => {
  let component: TestSolutionComponent;
  let fixture: ComponentFixture<TestSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

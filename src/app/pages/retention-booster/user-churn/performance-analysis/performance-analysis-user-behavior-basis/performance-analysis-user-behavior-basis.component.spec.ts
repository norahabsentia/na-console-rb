import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAnalysisUserBehaviorBasisComponent } from './performance-analysis-user-behavior-basis.component';

describe('PerformanceAnalysisUserBehaviorBasisComponent', () => {
  let component: PerformanceAnalysisUserBehaviorBasisComponent;
  let fixture: ComponentFixture<PerformanceAnalysisUserBehaviorBasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceAnalysisUserBehaviorBasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceAnalysisUserBehaviorBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

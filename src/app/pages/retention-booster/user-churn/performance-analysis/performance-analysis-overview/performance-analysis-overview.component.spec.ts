import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAnalysisOverviewComponent } from './performance-analysis-overview.component';

describe('PerformanceAnalysisOverviewComponent', () => {
  let component: PerformanceAnalysisOverviewComponent;
  let fixture: ComponentFixture<PerformanceAnalysisOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceAnalysisOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceAnalysisOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

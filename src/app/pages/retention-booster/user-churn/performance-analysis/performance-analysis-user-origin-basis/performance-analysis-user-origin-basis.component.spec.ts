import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAnalysisUserOriginBasisComponent } from './performance-analysis-user-origin-basis.component';

describe('PerformanceAnalysisUserOriginBasisComponent', () => {
  let component: PerformanceAnalysisUserOriginBasisComponent;
  let fixture: ComponentFixture<PerformanceAnalysisUserOriginBasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceAnalysisUserOriginBasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceAnalysisUserOriginBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

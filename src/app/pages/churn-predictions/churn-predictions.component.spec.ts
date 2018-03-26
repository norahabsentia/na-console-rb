import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurnPredictionsComponent } from './churn-predictions.component';

describe('ChurnPredictionsComponent', () => {
  let component: ChurnPredictionsComponent;
  let fixture: ComponentFixture<ChurnPredictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurnPredictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurnPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

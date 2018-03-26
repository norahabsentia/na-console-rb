import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSwitcherComponent } from './chart-switcher.component';

describe('ChartsSwithcerComponent', () => {
  let component: ChartSwitcherComponent;
  let fixture: ComponentFixture<ChartSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSwitcherTableComponent } from './chart-switcher-table.component';

describe('ChartSwitcherTableComponent', () => {
  let component: ChartSwitcherTableComponent;
  let fixture: ComponentFixture<ChartSwitcherTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSwitcherTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSwitcherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchCalendarComponent } from './dispatch-calendar.component';

describe('DispatchCalendarComponent', () => {
  let component: DispatchCalendarComponent;
  let fixture: ComponentFixture<DispatchCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

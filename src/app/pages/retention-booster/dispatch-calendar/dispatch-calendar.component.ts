import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from "ng-fullcalendar";

@Component({
  selector: 'dispatch-calendar',
  templateUrl: './dispatch-calendar.component.html',
  styleUrls: ['./dispatch-calendar.component.scss']
})
export class DispatchCalendarComponent implements OnInit {

  calendarOptions;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() {}
  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
    };
  }

}

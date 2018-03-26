import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-overview-status-card',
  templateUrl: './overview-status-card.component.html',
  styleUrls: ['./overview-status-card.component.scss']
})
export class OverviewStatusCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() data;
}

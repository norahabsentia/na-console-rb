import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'notification-manager',
  templateUrl: './notification-manager.component.html',
  styleUrls: ['./notification-manager.component.scss']
})
export class NotificationManagerComponent implements OnInit {
  showTab = 'SCHEDULER';
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

}

import { Component, OnInit , Input } from '@angular/core';

import { NgForm } from '@angular/forms';

import { NotificationService } from '../shared/notification.service';

import { Notification } from '../shared/notification.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'notification-template',
  templateUrl: './notification-template.component.html',
  styleUrls: ['./notification-template.component.scss']
})
export class NotificationTemplateComponent implements OnInit {

  templateList = [];
  constructor(private notificationService: NotificationService, private tostr: ToastrService) { }
  
  ngOnInit() { 
      this.templateList = this.notificationService.getNotificationTemplate();
  }
   
  useTemplate(object: Notification){
      this.notificationService.showHide = 0;      
      this.notificationService.selectedNotification = Object.assign({}, object);
  }
  
  
}

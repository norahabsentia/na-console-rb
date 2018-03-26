import { Component, OnInit,Input } from '@angular/core';

import { NgForm } from '@angular/forms';

import { NotificationService } from '../shared/notification.service';

import { Notification } from '../shared/notification.model';

import { ToastrService } from 'ngx-toastr';


 
@Component({
  selector: 'notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  @Input() 
  selectedNotification : Notification
  
  renederedFirstTime : boolean = false;
  
  noti_List: Notification[];
  constructor(private notificationService: NotificationService, private tostr: ToastrService) { }
  
  ngOnInit() {
    var x = this.notificationService.getData();
    x.snapshotChanges().subscribe(item => {
      this.noti_List = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        console.log(element.key);
        y["noti_ID"] = element.key;
        this.noti_List.push(y as Notification);
        
        if(!this.renederedFirstTime && this.selectedNotification && element.key == this.selectedNotification.noti_ID){
            this.renederedFirstTime = true;
            this.onEdit(y as Notification);
        }
      });
    });
  }

  onEdit(noti: Notification) {
    this.notificationService.selectedNotification = Object.assign({}, noti);
    let tempCustomerId = [];

    if(this.notificationService.selectedNotification.Customer_Segment_ID){

        for(let i=0;;i++)
        {
          if(this.notificationService.selectedNotification.Customer_Segment_ID[i] != undefined)
            tempCustomerId.push(this.notificationService.selectedNotification.Customer_Segment_ID[i]);
          else
            break;
        }

        this.notificationService.selectedNotification.Customer_Segment_ID = tempCustomerId;
        this.notificationService.itemArray = this.notificationService.itemsInit.slice(0);
        let tempItemArray = [];
        for(let i=0;i<this.notificationService.itemArray.length;i++)
        {
          for(let j=0;j<tempCustomerId.length;j++)
          {
            if(this.notificationService.itemArray[i].name != tempCustomerId[j].name&&j==tempCustomerId.length-1)
              tempItemArray.push(this.notificationService.itemArray[i]);
            if(this.notificationService.itemArray[i].name == tempCustomerId[j].name)
              break;
          }
        }
        this.notificationService.itemArray = tempItemArray;
    }
    else{
        this.notificationService.selectedNotification.Customer_Segment_ID = [];
        this.notificationService.itemArray = this.notificationService.itemsInit.slice(0);
    }
    
    this.notificationService.temp  = Object.assign({}, this.notificationService.selectedNotification);
    this.notificationService.rightArray = this.notificationService.selectedNotification.Customer_Segment_ID;
    this.notificationService.tempItemArray = this.notificationService.itemArray.slice(0);
    this.notificationService.tempRightArray = this.notificationService.rightArray.slice(0);

  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this notification ?') == true) {
      this.notificationService.deleteNotification(key);
      this.notificationService.selectedNotification = {
        noti_ID: null,
        title: '',
        body: '',
        deeplink: '',
        Customer_Segment_ID: '',
      }
      this.notificationService.temp = {
        noti_ID: null,
        title: '',
        body: '',
        deeplink: '',
        Customer_Segment_ID: '',
      }
      this.notificationService.rightArray = [];
      this.tostr.warning("Deleted Successfully", "Success");
    }
  }

}

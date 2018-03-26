import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Notification } from './notification.model';
import { Filler } from './filler.model';

@Injectable()
export class NotificationService {

  notificationList: AngularFireList<any>;
  selectedNotification: Notification = new Notification();
  temp: Notification = new Notification();
  rightArray: any = [];
  itemArray: any = [];
  tempItemArray: any = [];
  tempRightArray: any = [];
  showHide = 0;
  curPreset = [];
  editValue  = 0;
  editFillerSection = 0;
  addFillerTextbox = 0;
  itemsInit = [
    { id: 1, name: 'Bored' },
    { id: 2, name: 'Tenacious' },
    { id: 3, name: 'Fighter' },
    { id: 4, name: 'Disinterested' },
    { id: 5, name: 'Ordinary' },
    { id: 6, name: 'Trooper' },
    { id: 7, name: 'Needs a challenge' },
    { id: 8, name: 'Successful' },
    { id: 9, name: 'Achiever' }
  ];
  fillerArray = [
    {
      filler_id: '1', tag_name: 'Discount', count: 4, "value_segments":
        {
          "10": ["High loyalty", "Low skill", "High loyalty", "Low skill", "High loyalty", "Low skill"],
          "20": ["Low Loyalty", "High Skill"],
          "30": ["High loyalty", "Low skill", "High loyalty", "Low skill", "High loyalty", "Low skill"],
          "40": ["Low Loyalty", "High Skill"],
          "50": ["Low Loyalty", "High Skill"],
          "60": ["Low Loyalty", "High Skill"],
          "70": ["Low Loyalty", "High Skill"],
          "80": ["Low Loyalty", "High Skill"],
          "90": ["Low Loyalty", "High Skill"],
          "100": ["Low Loyalty", "High Skill"]
        }
    },
    {
      filler_id: '2', tag_name: 'Promotion game', count: 1, "value_segments":
        { "10": ["High loyalty", "Low skill"], "20": ["Low Loyalty", "High Skill"] }
    },
    { filler_id: '3', tag_name: 'Coin pack', count: 2 },
 
  ];
  notificationTemplate = [
    { templateId: '1', title: 'Hello `Username`. Today is `Month`', body: 'Hello `brave`. Today is `test4`' },
    { templateId: '2', title: 'test `Country` . Today is `test1`', body: '`Time`. Today is `Day`' },
    { templateId: '3', title: 'test `brave` . Today is `test1`', body: '`Time`. Today is `Day`' }
  ];
  colorArray = [
    "#0f6277",
    "#106d8c",
    "#128b9d",
    "#2bafc2",
    "#3cd1e5",
    "#c6c7c7",
    "#989797",
    "#6c6c6c",
    "#525252",
    "#3f3f3f"
  ];
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.notificationList = this.firebase.list('notifications');
    return this.notificationList;
  }

  insertNotification(notification: Notification, arr) {
    this.getData();
    if (!notification.deeplink) {
      this.notificationList.push({
        title: notification.title,
        body: notification.body,
        deeplink: '',
        Customer_Segment_ID: arr
      });
    } else {
      this.notificationList.push({
        title: notification.title,
        body: notification.body,
        deeplink: notification.deeplink,
        Customer_Segment_ID: arr
      });
    }
  }

  updateNotification(notification: Notification, arr) {

    if (!notification.deeplink) {
      this.notificationList.update(notification.noti_ID,
        {
          title: notification.title,
          body: notification.body,
          deeplink: '',
          Customer_Segment_ID: arr
        });
    }
    else {
      this.notificationList.update(notification.noti_ID,
        {
          title: notification.title,
          body: notification.body,
          deeplink: notification.deeplink,
          Customer_Segment_ID: arr
        });
    }
  }

  deleteNotification(noti_ID: string) {
    this.notificationList.remove(noti_ID);

  }

  getFiller() {
    let finalArrayObj = this.fillerArray;
    for (var i = 0; i < finalArrayObj.length; i++) {
      finalArrayObj[i]['color'] = this.getRandomColor();
    }
    return finalArrayObj;
  }


  getNotificationTemplate() {
    for (var i = 0; i < this.notificationTemplate.length; i++) {
      let fillerArray = this.getFillerListFromNotificationObj(this.notificationTemplate[i]);
      if (!this.notificationTemplate[i]['filler']) this.notificationTemplate[i]['filler'] = []

      this.notificationTemplate[i]['filler'].push(fillerArray);
    }
    return this.notificationTemplate;
  }

  getFillerListFromNotificationObj(notificationObj) {
    let fillers = []
    let str = this.getConcateString(notificationObj.title, notificationObj.body);
    let splittext = str.match(/`(.*?)`/g);
    for (var j = 0; j < splittext.length; j++) {
      fillers.push(this.getFillerByName(splittext[j].slice(1, -1)));
    }

    return fillers;
  }

  getConcateString(title, body) {
    return title + body;
  }

  getFillerByName(fillerName) {
    let fillerNameList = {};
    for (var i = 0; i < this.fillerArray.length; i++) {
      if (this.fillerArray[i].tag_name == fillerName) {
        fillerNameList = this.fillerArray[i];
        fillerNameList['color'] = this.getRandomColor();
        break;
      }
    }
    return fillerNameList;
  }

  addFiller(val) {
    var id = this.fillerArray.length;
    this.fillerArray.push({ filler_id: (id + 1) + '', tag_name: val, count: 0 });
    return this.fillerArray;
  }

  getRandomColor() {
    // return this.colorArray[index % 9];
    var letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}

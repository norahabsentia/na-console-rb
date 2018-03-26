import { Component, OnInit, Input } from '@angular/core';

import { NgForm } from '@angular/forms';

import { NotificationService } from '../shared/notification.service';

import { Notification } from '../shared/notification.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'edit-filler',
  templateUrl: './edit-filler.component.html',
  styleUrls: ['./edit-filler.component.scss']
})
export class EditFiller implements OnInit {
  @Input() curfiller = [];
  curfillerKey;
  curPreset = [];
  presetToBeAdded = [];
  editValue = 0;
  editSegmentKey;
  selectedValue;
  addValueTextbox: string;
  addValue: string;
  constructor(private notificationService: NotificationService, private tostr: ToastrService) { }
  editFillerItemArray: any = [];

  ngOnInit() {
    console.log('current filler')
    console.log(this.curfiller);

    this.initFiller();

    if (this.curfiller['value_segments']) {
      this.getCurrentFillerKeys();
      //this.curfillerKey = Object.keys(this.curfiller['value_segments']);
    }
  }

  initFiller() {
    console.log('reset with : ')
    console.log(this.notificationService.itemsInit)
    console.log(this.notificationService.itemsInit.slice(0))

    let self = this;
    this.editFillerItemArray = [];
    this.notificationService.itemsInit.forEach(element => {
      if (self.editSegmentKey && (!self.curfiller['value_segments'] || !self.curfiller['value_segments'][self.editSegmentKey] || self.curfiller['value_segments'][self.editSegmentKey].indexOf(element.name) < 0)) {
        self.editFillerItemArray.push(element)
      }
    });;
  }

  getCurrentFillerKeys() {
    if (this.curfiller['value_segments']) {
      this.curfillerKey = Object.keys(this.curfiller['value_segments']);
    } else {
      this.curfillerKey = this.curfiller['value_segments'];
    }
    return this.curfillerKey;
  }
  editfillerValue(key) {
    this.editSegmentKey = key;
    this.editValue = 1;
    this.notificationService.editValue = 1;
    this.initFiller()
  }
  addSegmentFiller(event) {
    var i = 0;
    let self = this;
    this.editFillerItemArray.forEach(element => {
      if (element.name == event) {
        self.curfiller['value_segments'][self.editSegmentKey].push(element.name);
        this.editFillerItemArray.splice(i, 1);
        return;
      }
      i++;
    });
  }

  reset() {
    if (!this.curfiller['value_segments_presets']) this.curfiller['value_segments_presets'] = {};
    if (!this.curfiller['value_segments']) this.curfiller['value_segments'] = {};


    this.curfiller['value_segments'][this.editSegmentKey] = [];
    this.curfiller['value_segments_presets'][this.editSegmentKey] = [];
    this.initFiller();

    console.log('after reset arra of ' + this.editSegmentKey)
    console.log(this.curfiller['value_segments'][this.editSegmentKey])
  }


  saveAsPreset() {
    console.log(this.curfiller);
    if (!this.curfiller['value_segments_presets']) this.curfiller['value_segments_presets'] = {};
    this.curfiller['value_segments_presets'][this.editSegmentKey] = this.curfiller['value_segments'][this.editSegmentKey];
    console.log('preset values')
    console.log(this.curfiller['value_segments_presets']);

    let fobj = this.notificationService.curPreset.find(a => a.valuename == this.editSegmentKey);
    console.log('perhaps this one', fobj);
    if (fobj) {
      let index = this.notificationService.curPreset.indexOf(fobj);
      // this.curPreset[index].fillername = this.curfiller["tag_name"];
      this.notificationService.curPreset[index].presetvalues = this.curfiller['value_segments_presets'][this.editSegmentKey];
    } else {
      this.notificationService.curPreset.push({
        fillername: this.curfiller["tag_name"],
        valuename: this.editSegmentKey,
        presetvalues: this.curfiller['value_segments_presets'][this.editSegmentKey]
      });
    }
    console.log(this.curfiller['value_segments_presets'][this.editSegmentKey])
    //   this.curfiller['value_segments'][this.editSegmentKey] =[];
  }

  onPresetSelectionClick(value) {    
    let presetvalues = value.presetvalues;
    this.presetToBeAdded = presetvalues;
    console.log('clicked values', presetvalues);

    this.curfiller['value_segments'][this.editSegmentKey] = [];

    presetvalues.forEach(el => {
      this.curfiller['value_segments'][this.editSegmentKey].push(el);
    })
    this.editFillerItemArray = [];
    console.log('present values', this.curfiller['value_segments'][this.editSegmentKey]);
    console.log('All values', this.notificationService.itemsInit);
    this.notificationService.itemsInit.forEach(el => {
      let i = presetvalues.indexOf(el.name);
      if(i == -1) {
        this.editFillerItemArray.push(el)
      }
    })
    
  }

  backFiller(event) {
    // var i = 0;
    var itemFound;
    this.notificationService.itemsInit.forEach(element => {
      if (element.name == event) {
        itemFound = element;
      }
      // i++;
    });
    var currentSegArray = this.curfiller['value_segments'][this.editSegmentKey];
    var currentValueIndex = currentSegArray ? currentSegArray.indexOf(event) : -1;

    currentSegArray.splice(currentValueIndex, 1);
    console.log('after',  this.curfiller['value_segments'][this.editSegmentKey]);
    console.log('Object',  this.curfiller['value_segments']);

    this.editFillerItemArray.push(itemFound);
  }

  showEditFillerTemplate(value) {
    this.editValue = value;
    this.notificationService.editValue = value;
  }
  addValueFiller() {
    this.presetToBeAdded = [];
    console.log('Saved preset clear');
    this.notificationService.addFillerTextbox = 1;
  }

  createFillerValue(val) {
    console.log(this.addValue);
    this.editfillerValue(this.addValue)

    if (this.curfiller['value_segments']) {
      this.curfiller['value_segments'][this.addValue] = [];
    } else {
      this.curfiller['value_segments'] = {};
      this.curfiller['value_segments'][this.addValue] = [];
    }
    this.editSegmentKey = this.addValue;
    this.notificationService.addFillerTextbox = 0;
    this.editValue = 1;
    this.notificationService.editValue = 1;

    this.getCurrentFillerKeys();
  }
}
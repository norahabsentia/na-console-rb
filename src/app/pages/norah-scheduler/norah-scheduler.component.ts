import { Component, OnInit, ViewChild } from '@angular/core';
import { TextInputHighlightComponent } from 'angular-text-input-highlight/text-input-highlight.component';
import { HighlightTag } from 'angular-text-input-highlight';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// service import
import {NorahService } from './shared/norah.service';

import { Norah } from './shared/norah.model';

import * as $ from 'jquery';
import { window } from 'rxjs/operator/window';

import { Observable } from 'rxjs/Observable';

import { DialogService } from './shared/dialog.service';
import { CanDeactivateGurad } from "./shared/can-deactivate-guard.service";
import { concat } from 'rxjs/operators/concat';


@Component({
  moduleId: module.id,
  selector: 'norah-scheduler',
  templateUrl: 'norah-scheduler.component.html',
  styleUrls: ['./norah-scheduler.component.scss'],
  
})

export class NorahSchedulerComponent implements OnInit {
  leftValue:number;
  norah_List: Norah[];
  count:boolean;
  options_week = [{option_id:1,name:1},
    {option_id:2,name:2},
    {option_id:3,name:3},
    {option_id:4,name:4},
    {option_id:5,name:5}];
  options_day = [{option_id:1,name:1},
      {option_id:2,name:2},
      {option_id:3,name:3},
      {option_id:4,name:4},
      {option_id:5,name:5}];

  top_entries=[{id:1,name:10},
                  {id:2,name:20}]




  constructor(
        private route: ActivatedRoute,
        private router: Router,
        public norahService: NorahService,
        private canDeactivateGurad: CanDeactivateGurad,
        private dialogService: DialogService
        ){
         


        }
onOptionSelected(event){

}

  ngOnInit() {
   
    this.count = true;
    this.norahService.flag = false;
    var x = this.norahService.getData();
    x.snapshotChanges().subscribe(item => {
      this.norah_List = [];
      this.norahService.scheduleArray = [];
      this.norahService.scheduleArray_temp = [];
      let count:number = 0;
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["norah_ID"] = element.key;
        this.norah_List.push(y as Norah);

      });
      if(this.count){
      this.norahService.scheduleTop_entry="1";
      this.norahService.scheduleTop_entry_temp="1";
      this.count= false;
      let studio_game:string = 'com_studio_game';
      for(let i = 0; i < this.norah_List.length; i++)
      {
        let temp: string = studio_game + (i+1);
        this.norahService.scheduleArray.push({
          customer:this.norah_List[i][temp].schedule.customer,
          id:this.norah_List[i][temp].schedule.id,
          week:5,
          day:5,
          norah_ID:this.norah_List[i].norah_ID
        });
      }

        for(let i = 0; i < this.norah_List.length; i++)
        {
          let temp: string = studio_game + (i+1);
        this.norahService.scheduleArray_temp.push({
          customer:this.norah_List[i][temp].schedule.customer,
          id:this.norah_List[i][temp].schedule.id,
          week:5,
          day:5,
          norah_ID:this.norah_List[i].norah_ID,
          
    
        });}
          
          
      }
      else{

        let studio_game:string = 'com_studio_game';
        this.norahService.scheduleTop_entry=this.norah_List[0]['com_studio_game1'].top_entry;
        this.norahService.scheduleTop_entry_temp=this.norah_List[0]['com_studio_game1'].top_entry;

        for(let i = 0; i < this.norah_List.length; i++)
        {
          let temp: string = studio_game + (i+1);
          this.norahService.scheduleArray.push({
          customer:this.norah_List[i][temp].schedule.customer,
          id:this.norah_List[i][temp].schedule.id,
          week:this.norah_List[i][temp].schedule.week,
          day:this.norah_List[i][temp].schedule.day,
          norah_ID:this.norah_List[i].norah_ID,
          // top_entry:this.norah_List[i][temp].top_entry,
        
        });

      }

        for(let i = 0; i < this.norah_List.length; i++)
        {
          let temp: string = studio_game + (i+1);
          this.norahService.scheduleArray_temp.push({
          customer:this.norah_List[i][temp].schedule.customer,
          id:this.norah_List[i][temp].schedule.id,
          week:this.norah_List[i][temp].schedule.week,
          day:this.norah_List[i][temp].schedule.day,
          norah_ID:this.norah_List[i].norah_ID,
          // top_entry:this.norah_List[i][temp].top_entry,
    
        });}
      }
    });

  }
  onChangeLeft(leftItem,leftOptionValue) {
    // this.norahService.scheduleArray[leftItem.id-1].leftValue=false;
    this.norahService.flag = true;
  }

  onChangeRight(rightItem,rightOptionValue) {
    this.norahService.flag = true;
    // this.norahService.scheduleArray[rightItem.id-1].rightValue=false;
  }

  onChangeTopentry(top_entry,value){

  }
  
  onSubmit(norahForm: NgForm) {
    this.norahService.flag = false;
    this.norahService.saveData();
  }

  onDiscard(){
    this.norahService.discard();
  }

  onReset(){
    // this.norahService.scheduleArray=[];
    this.norahService.resetData();
    
  }


  canDeactivate(): Observable<boolean> | boolean {
    for(let i=0;i<this.norahService.scheduleArray.length;i++){


      if(this.norahService.flag){
        return this.dialogService.confirm('Do you want to leave this page?');
      }
    }
    return true;
}	


  
}

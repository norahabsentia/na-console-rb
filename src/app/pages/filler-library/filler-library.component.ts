import { Component, OnInit, ViewChild,Input,Output,EventEmitter } from '@angular/core';
import { TextInputHighlightComponent } from 'angular-text-input-highlight/text-input-highlight.component';
import { HighlightTag } from 'angular-text-input-highlight';

import {NotificationService } from './shared/notification.service';
import {Notification} from './shared/notification.model';
import { EditFiller } from './edit-filler/edit-filler.component';
 
@Component({
  moduleId: module.id,
  selector: 'ngx-filler-library',
  templateUrl: 'filler-library.component.html',
  styleUrls: ['./filler-library.component.scss'],
  providers :[NotificationService]
})

export class FillerLibraryComponent implements OnInit {
 
  @ViewChild('highlight') highlight: TextInputHighlightComponent;
  @ViewChild('highlightTitle') highlightTitle: TextInputHighlightComponent;

  @Input()
  selectedNotification : Notification
  
  @Output() 
  eventEmitter = new EventEmitter();  
  getNotification($event){
      this.eventEmitter.emit($event);  
  } 
  // items = [
  //   {id:1,name:'Normacjk'},
  //   {id:2,name:'Inspiring'},
  //   {id:3,name:'Extraordinary'},
  //   {id:4,name:'Successfully accomplished'},
  //   {id:5,name:'Unsuccessfull'},
  //   {id:6,name:'Trending'},
  //   {id:7,name:'Over Anticipated'},
  //   {id:8,name:'Normally Existed.'},
  //   {id:9,name:'item1'},
  //   {id:10,name:'item2'},
  //   {id:11,name:'item3'},
  //   {id:12,name:'item4'},
  //   {id:13,name:'item5'},
  //   {id:14,name:'item6'},
  //   {id:15,name:'item7'},
  //   {id:16,name:'item8'},

  // ];

  // orderId: string = 'id';

  // rightArray =[];
  // selectedDay : string = '';
  // getId :string ='';
  // selectChangeHandler(event){

  //   var i = 0;
   
  //   this.items.forEach(element => {
      
  //     if(element.name == event){
  //       this.rightArray.push({id: element.id,name: element.name});
  //       this.items.splice(i, 1);
  //       return;
  //     }
  //     i ++;
  //   });
 

  // }

  // buttonChangeHandler(index){
  //   this.items.push(this.rightArray[index]);
  //   this.rightArray.splice(index, 1);
  //   this.sortLeft();
  // }
  // sortLeft(){
  //   this.items.sort((a: any, b: any) => {
  //     if (a.id < b.id) {
  //       return -1;
  //     } else if (a.id > b.id) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }


  // tags = [
  //   {
  //     color: 'danger',
  //     name: 'Category 1',
  //   },
  //   {
  //     color: 'success',
  //     name: 'Category 2',
  //   },
  //   {
  //     color: 'primary',
  //     name: 'Category 3',
  //   },
  //   {
  //     color: 'info',
  //     name: 'Category 4',
  //   },
  //   {
  //     color: 'yellow',
  //     name: 'Category 5',
  //   },
  // ];
  taggedWords = [];
  taggedTitleWords = [];
  text = '';
  field = '';
  start = 0;
  end = 0;

  constructor(private notificationService : NotificationService) { }


  ngOnInit() {
      console.log('selected notification is : ')
      console.log(this.selectedNotification);
      
  }
 
  tagSelection(tag) {
    const textComponent = this.field === 'body' ?
      this.highlight.textInputElement :
      this.highlightTitle.textInputElement;
    const taggedArray = this.field === 'body' ? this.taggedTitleWords.slice() : this.taggedWords.slice();
    const tagData = {
      indices: {
        start: this.start,
        end: this.end,
      },
      cssClass: tag.color,
      data: textComponent.value.slice(this.start, this.end),
    };
    if (!taggedArray.filter(t => this.overlaps(t, tagData)).length) {
      this.field === 'body' ? this.taggedTitleWords.push(tagData) : this.taggedWords.push(tagData);
      textComponent.dispatchEvent(new Event('input'));
    }
    setTimeout(() => {
      this.start = 0;
      this.end = 0;
      this.field = '';
    }, 100);
  }

  selectText(target: HTMLTextAreaElement, field) {
    this.start = target.selectionStart;
    this.end = target.selectionEnd;
    this.field = field;
  }

  indexIsInsideTag(index: number, tag: HighlightTag) {
    return tag.indices.start <= index && index <= tag.indices.end;
  }

  overlaps(tagA: HighlightTag, tagB: HighlightTag) {
    return (
      this.indexIsInsideTag(tagB.indices.start, tagA) ||
      this.indexIsInsideTag(tagB.indices.end, tagA)
    );
  }

  refreshHighlights() {
    this.highlight.refresh();
    this.highlightTitle.refresh();
  }
}

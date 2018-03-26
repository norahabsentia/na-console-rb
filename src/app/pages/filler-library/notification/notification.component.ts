import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { NotificationService } from '../shared/notification.service';

import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../ui-features/modals/modal/modal.component';

declare var $: any;
@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./notification.component.scss', './notification-filler.css']
})
export class NotificationComponent implements OnInit {
  selectedText: string;
  currentSelection: string;
  isCurrentSelectionFiller: boolean = false;
  selectionStartIndex: number = -1;
  selectionEndIndex: number = -1;
  currentFillerStartIndex: number = -1;
  currentFillerEndIndex: number = -1;
  newFillerVal: string;
  fillArr = [];
  colors: string;
  currentFiller = [];
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
  showAddNewFiller: boolean = false;

  showFillerStatus: boolean = false;;

  @Input()
  selectedNotification: Notification
  @Output()
  eventEmitter = new EventEmitter();

  ngOnInit() {

    this.resetForm();
    this.notificationService.itemArray = this.notificationService.itemsInit.slice(0);
    this.getFiller();

    this.tooltip();
  }

  // noti_EditList: Notification[];
  constructor(public router: Router,
    public notificationService: NotificationService, private tostr: ToastrService, private modalService: NgbModal) { }



  tags = [
    {
      color: 'danger',
      name: 'Category 1',
    },
    {
      color: 'success',
      name: 'Category 2',
    },
    {
      color: 'primary',
      name: 'Category 3',
    },
    {
      color: 'info',
      name: 'Category 4',
    },
    {
      color: 'yellow',
      name: 'Category 5',
    },
  ];
  taggedWords = [];
  taggedTitleWords = [];
  text = '';
  field = '';
  start = 0;
  end = 0;



  // for order
  orderId: string = 'id';


  selectedDay: string = '';
  getId: string = '';
  selectChangeHandler(event) {

    var i = 0;
    this.notificationService.itemArray.forEach(element => {

      if (element.name == event) {
        this.notificationService.rightArray.push({ id: element.id, name: element.name });
        this.notificationService.itemArray.splice(i, 1);
        return;
      }
      i++;
    });
  }

  backToNotificationManager() {
    console.log('in..')

    this.eventEmitter.emit(true);
    // this.router.navigate(['pages/notificationslist']);

  }

  buttonChangeHandler(index) {
    this.notificationService.itemArray.push(this.notificationService.rightArray[index]);
    this.notificationService.rightArray.splice(index, 1);
    this.sortLeft();
  }

  sortLeft() {
    this.notificationService.itemArray.sort((a: any, b: any) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  }


  onSubmit(notificationForm: NgForm) {
    if (notificationForm.value.noti_ID == null) {
      console.log('not null');

      this.notificationService.insertNotification(notificationForm.value, this.notificationService.rightArray);

    }
    else {
      console.log('null');

      this.notificationService.updateNotification(notificationForm.value, this.notificationService.rightArray);

    }
    this.resetForm(notificationForm);
    this.tostr.success('Succcess');
  }

  resetForm(notificationForm?: NgForm) {
    if (notificationForm != null)
      notificationForm.reset();
    this.notificationService.rightArray = [];
    this.notificationService.itemArray = this.notificationService.itemsInit.slice(0);
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
  }


  resetEditForm() {
    this.notificationService.selectedNotification = Object.assign({}, this.notificationService.temp);
    this.notificationService.itemArray = this.notificationService.tempItemArray.slice(0);
    this.notificationService.rightArray = this.notificationService.tempRightArray.slice(0);
  }

  tooltip() {
    let self = this;

    $('#body').qtip(this.getTooltipConfig(1));
    $('#title').qtip(this.getTooltipConfig(2));
  }

  getTooltipConfig(id) {
    let self = this;
    return {
      prerender: true,
      overwrite: true,
      content: {
        text: $('.fillerTooltip' + id),
        button: 'close'
      },
      position: {
        target: 'mouse',
        my: 'top center',
        at: 'top center',
        tooltip: 'topCenter',
        adjust: {
          mouse: false
        },

      },
      style: {
        classes: 'filletTooltip-main',

      },
      events: {
        visible: function (event, api) {
          var id = api._id;
          $("#" + id).css("top", $("#" + id).position().top - 100);
        },
        show: function (event, api) {
          console.log('EVENT : ' + window.getSelection().toString() + " ON ID:" + api.target[0].id)
          console.log(event)
          console.log(api);
          let id = api.target[0].id;

          var len = window.getSelection().toString().trim().length;

          if (len <= 0) {
            self.resetFillerVar();
            return false;
          } else {
            var text = document.getElementById(id) as HTMLInputElement;

            self.selectionStartIndex = text.selectionStart;
            self.selectionEndIndex = text.selectionEnd;
            self.selectedText = window.getSelection().toString();

            console.log('NEW SELECTED TEXT :' + self.selectedText);
            return true;
          }
        },
        hide: function (event, api) {
        }
      },
      show: {
        event: 'select'
      },
      hide: {
        event: 'unfocus'
      }
    }
  }
  fillerEnabledTitleInputsClick(type_, event) {
    var text = document.getElementById(type_) as HTMLInputElement;
    var currentCursorIndex = text.selectionStart;
    var isSelectable = false;

    var fillerStartIndex = -1;
    var fillerEndIndex = -1;
    var mayBeSelectable = false;

    var textContent = this.notificationService.selectedNotification[type_];

    console.log('CURRENT CURSOR INDEX :' + currentCursorIndex);
    console.log(textContent.length);
    for (var i = 0; i < textContent.length; i++) {
      console.log('compare : ' + textContent[i])
      console.log('RESULT : ' + (textContent[i] === "`"))

      if (textContent[i] === "`") {
        if (!mayBeSelectable && i < currentCursorIndex) {
          fillerStartIndex = i;
          mayBeSelectable = true;
        } else if (mayBeSelectable && i >= currentCursorIndex) {
          isSelectable = true;
          fillerEndIndex = i;
          break;
        } else if (mayBeSelectable && i < currentCursorIndex) {
          fillerStartIndex = -1;
          fillerEndIndex = -1;
          mayBeSelectable = false;
          isSelectable = false;
        }

      }
    }

    if (isSelectable) {
      this.currentFillerStartIndex = fillerStartIndex;
      this.currentFillerEndIndex = fillerEndIndex;

      var titleElem = document.getElementById(type_) as HTMLInputElement;
      this.isCurrentSelectionFiller = true;
      this.textSelect(type_, event);

      titleElem.setSelectionRange(fillerStartIndex + 1, fillerEndIndex)

    } else {
      this.isCurrentSelectionFiller = false;
      this.currentFillerStartIndex = -1;
      this.currentFillerEndIndex = -1;
    }

    console.log('IS FILLER FOUND : ' + isSelectable);
    console.log("FILLER START : " + fillerStartIndex)
    console.log("FILLER END : " + fillerEndIndex)
    console.log(text.selectionStart)
  }

  textSelect(val, event) {
    this.currentSelection = val;
  }

  resetFillerVar() {
    this.selectedText = '';
    this.selectionStartIndex = -1;
    this.selectionEndIndex = -1;
    this.currentSelection = ''
  }
  showFiller() {
    this.showFillerStatus = true;
  }

  closeFiller() {
    this.showFillerStatus = false;
    this.resetFillerVar();
  }
  countNotification(obj) {
    if (obj)
      return Object.keys(obj).length;
    else
      return 0;
  }

  addThisFiller(filler) {
    console.log("current");
    console.log(this.currentSelection);
    let prefixSuffix = this.isCurrentSelectionFiller ? '' : '`';
    if (this.currentSelection != undefined && this.currentSelection != '') {
      if (this.currentSelection && this.currentSelection == 'title') {
        console.log('CURRENT VAL : ' + this.notificationService.selectedNotification.title)
        console.log('START : ' + this.selectionStartIndex)
        console.log('END : ' + this.selectionEndIndex)
        console.log('REPLACE WITH : ' + '`' + filler.tag_name + '`')

        this.notificationService.selectedNotification.title = this.replaceBetween(this.selectionStartIndex, this.selectionEndIndex,
          prefixSuffix + filler.tag_name + prefixSuffix, this.notificationService.selectedNotification.title);

        console.log('NEW VAL : ' + this.notificationService.selectedNotification.title);

      } else if (this.currentSelection && this.currentSelection == 'body') {
        this.notificationService.selectedNotification.body = this.replaceBetween(this.selectionStartIndex, this.selectionEndIndex,
          prefixSuffix + filler.tag_name + prefixSuffix, this.notificationService.selectedNotification.body);
      }
    } else {
      this.currentFiller = filler;
      this.notificationService.editFillerSection = 1;
    }
    this.notificationService.editValue = 0;
    console.log(this.notificationService.editValue);
    this.closeFiller();
  }

  replaceBetween(start, end, what, actualString) {
    return actualString.substring(0, start) + what + actualString.substring(end);
  };

  addFiller() {
    var tagname = $('.settitle').text();
    if (tagname != "") {
      var id = this.fillArr.length;
      var count = 1;
      this.fillArr[id] = { id: id + 1, tag_name: tagname, count: count };
      this.getFiller();
    }
  }

  getFiller() {
    this.fillArr = this.notificationService.getFiller();

    console.log(this.fillArr);
  }

  showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
    activeModal.componentInstance.modalContent = `<div class='tag_list'><span class='tagbutton' 
              [ngStyle]={'background-color': fillArray.color} *ngFor='let fillArray of fillArr'> <span>
                  {{fillArray.tag_name}}
              </span> 
              <span>
                  {{fillArray.count}}
              </span>
              </span>
          </div>`;
  }


  removeFiller() {
    if (this.currentFillerStartIndex >= 0 && this.currentFillerEndIndex >= 0) {
      if (this.currentSelection == 'title' && this.notificationService.selectedNotification.title) {
        let valToReplace = this.notificationService.selectedNotification.title.substring(
          this.currentFillerStartIndex, this.currentFillerEndIndex + 1);
        if (valToReplace) {
          this.notificationService.selectedNotification.title =
            this.notificationService.selectedNotification.title.replace(valToReplace, '')
        }
      } else if (this.currentSelection == 'body') {
        let valToReplace = this.notificationService.selectedNotification.body.substring(
          this.currentFillerStartIndex, this.currentFillerEndIndex + 1);
        if (valToReplace) {
          this.notificationService.selectedNotification.body =
            this.notificationService.selectedNotification.body.replace(valToReplace, '')
        }
      }

      this.clearSelection();
    }
  }

  clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {  // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {  // Firefox
        window.getSelection().removeAllRanges();
      }
    }

    $('#title').qtip('hide');
    $('#body').qtip('hide');
  }

  addNewFillerBtnClick() {
    this.showAddNewFiller = true;
    this.newFillerVal = '';
    $('#newFillerBtn').select();
  }

  resetNewFillerVal() {
    this.newFillerVal = '';
  }

  createNewFiller() {
    if (!this.newFillerVal) return;

    this.fillArr = this.notificationService.addFiller(this.newFillerVal);
    this.fillArr[this.fillArr.length - 1]['color'] = this.notificationService.getRandomColor();
    this.showAddNewFiller = false;
  }
  showTemplate(value) {
    this.notificationService.showHide = value;
    this.notificationService.editValue = 0;
  }
  showEditFillerTemplate(value) {
    this.notificationService.editFillerSection = value;
  }
  getColor(i) {
    return this.colorArray[i%9];
  }

}

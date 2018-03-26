import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {
  showSelectItems;

  constructor() { }

  @Input() charts;
  @Output() changeEvent = new EventEmitter();
  ngOnInit() {
  }

  change() {
    this.showSelectItems = true;
  }
  select(item) {
    for(let o of this.charts){
      o.show = false;
    }

    item.show = true;
    this.showSelectItems = false;

    this.changeEvent.emit(item);
  }


}

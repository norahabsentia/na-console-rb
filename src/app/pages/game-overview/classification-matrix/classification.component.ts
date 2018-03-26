import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() data;

}

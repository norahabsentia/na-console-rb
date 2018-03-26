import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'performance-analysis',
  templateUrl: './performance-analysis.component.html',
  styleUrls: ['./performance-analysis.component.scss']
})
export class PerformanceAnalysisBoosterComponent implements OnInit {
  showTab = 'overview'
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

}

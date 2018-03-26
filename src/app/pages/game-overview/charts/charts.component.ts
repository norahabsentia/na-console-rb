import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartsService} from './charts.service';

@Component({
  selector: 'ngx-user-chart',
  template: `
    <chart *ngIf="data && !isTableView" [type]="type" [data]="data" [options]="validOptions"></chart>
    <div *ngIf="data && isTableView">
      <ngx-user-chart-table [data]="data"></ngx-user-chart-table>
    </div>
    <!-- DROPDOWN -->
    <div class="input-group">
      <div class="dropdown input-group-btn" ngbDropdown>
        <div class="list-icon chart-icon dropdown-toggle" ngbDropdownToggle>
          <i class="nb-list"></i>
        </div>
        <ul class="dropdown-menu" ngbDropdownMenu>
          <li class="dropdown-item" (click)="handleChangeView('table')">Display Simple Table</li>
          <li class="dropdown-item" (click)="handleChangeView('table')">
            Display a table with Visitor engagement metrics
          </li>
          <li class="dropdown-item" (click)="handleChangeView('bar')">Vertical bar graph</li>
          <li class="dropdown-item" (click)="handleChangeView('pie')">Pie Chart</li>
          <li class="dropdown-item" (click)="handleChangeView('table')">Tag Cloud</li>
        </ul>
      </div>
    </div>
   
  `,
})
export class UserChartsComponent implements OnChanges {
  @Input() type: string;
  @Input() series: any;
  @Input() options: any;

  isTableView: boolean = false;
  validOptions: any;
  data: any;

  constructor(private chartsService: ChartsService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type.currentValue !== changes.type.previousValue) {
      this.initChart();
    }
  }

  initChart(type = this.type) {
    this.isTableView = type === 'table';
    if (this.options) {
      this.validOptions = {...this.options};
    }
    if (!this.isTableView) {
      const {
        options,
        series,
      } = this.chartsService.buildChart(type, this.series, this.options);

      this.data = series;
      this.validOptions = options;
    }
  }

  handleChangeView(type: string) {
    this.initChart(type);
  }
}

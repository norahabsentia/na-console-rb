import {Component, Input, OnInit} from '@angular/core';
import {ChartsService} from './charts.service';

@Component({
  selector: 'ngx-user-chart-table',
  template: `
    <table>
      <tr>
        <td>TABLE</td>
      </tr>
    </table>
  `,
})
export class ChartsTableComponent implements OnInit {
  @Input() data: any;

  constructor(private chartsService: ChartsService) { }

  ngOnInit() {
  }
}

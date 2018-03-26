import {Component, Input, OnDestroy} from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-chartjs-bar',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarComponent implements OnDestroy {
  // dataChart: any;
  options: any;
  themeSubscription: any;
  @Input() data;
  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      // this.data = {
      //   // labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      //   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      //   datasets: [{
      //     data: [65, 59, 80, 81, 56, 55, 40],
      //     label: 'Series A',
      //     backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
      //   }, {
      //     data: [28, 48, 40, 19, 86, 27, 90],
      //     label: 'Series B',
      //     backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
      //   },{
      //     data: [49,89,75,84,86,80,61],
      //     label: 'Series C',
      //     backgroundColor: NbColorHelper.hexToRgbA(colors.success, 0.8),
      //   },{
      //     data: [69,37,92,40,32,31,74],
      //     label: 'Series D',
      //     backgroundColor: NbColorHelper.hexToRgbA(colors.warning, 0.8),
      //   },{
      //     data: [22,21,30,36,34,47,92],
      //     label: 'Series E',
      //     backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.8),
      //   }],
      // };

      this.options = {
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

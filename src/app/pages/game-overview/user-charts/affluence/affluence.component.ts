import {Component, OnDestroy} from '@angular/core';
import {NbColorHelper, NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-affluence-chart',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class AffluenceComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['afluance1', 'afluance2', 'afluance3', 'afluance4', 'afluance5', 'afluance6', 'afluance7'],
        datasets: [{
          data: [65, 59, 80, 91, 66, 55, 40],
          label: 'Actual churned',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        },{
          data: [55, 68, 40, 59, 80, 91, 66],
          label: 'Predicted to churn',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        },{
          data: [40, 53, 25, 49, 65, 71, 50],
          label: 'Churned and Predicted',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        },{
          data: [28, 30, 20, 15, 26, 7, 10],
          label: 'Predicted but not churned',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        },{
          data: [12, 28, 6, 22, 16, 20, 11],
          label: 'Churned but not predicted',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
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

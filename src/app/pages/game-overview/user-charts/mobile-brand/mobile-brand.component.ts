import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-mobile-brand-chart',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class MobileBrandComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
          borderColor: colors.danger,
        }, {
          data: [26,31,45,61,38,100,92],
          label: 'Series C',
          backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info,
        }, {
          data: [41,42,40,90,34,83,71],
          label: 'Series C',
          backgroundColor: NbColorHelper.hexToRgbA(colors.success, 0.3),
          borderColor: colors.info,
        }
          , {
            data: [69,37,92,40,32,31,74],
            label: 'Series C',
            backgroundColor: NbColorHelper.hexToRgbA(colors.warning, 0.3),
            borderColor: colors.info,
          }
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
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
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

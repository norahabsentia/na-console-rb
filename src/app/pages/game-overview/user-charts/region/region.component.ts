import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-region-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class RegionComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['Actual churned', 'Predicted to churn', 'Churned and Predicted', 'Predicted but not churned', 'Churned but not predicted'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['region1', 'region2', 'region3', 'region4', 'region5', 'region6', 'region7', 'region8', 'region9', 'region10', '>5', '1to5', '<5'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'log',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: [
          {
            name: 'Actual churned',
            type: 'line',
            data: [100, 90, 80, 70, 60, 50, 40, 30, 15, 5, 40, 20, 5],
          },
          {
            name: 'Predicted to churn',
            type: 'line',
            data: [100, 95, 80, 75, 60, 55, 40, 35, 15, 5, 40, 20, 5],
          },
          {
            name: 'Churned and Predicted',
            type: 'line',
            data: [95, 85, 75, 65, 55, 45, 35, 25, 10, 2.5, 30, 15, 3],
          },
          {
            name: 'Predicted but not churned',
            type: 'line',
            data: [30, 25, 30, 20, 25, 15, 20, 10, 10, 5, 3, 2, 1],
          },
          {
            name: 'Churned but not predicted',
            type: 'line',
            data: [30, 20, 25, 30, 20, 15, 25, 15, 10, 5, 3, 2, 1],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

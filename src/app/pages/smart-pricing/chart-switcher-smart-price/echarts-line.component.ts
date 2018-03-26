import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-line-smart-pricing',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineSmartPricingComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      this.options = {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };

      //
      // this.options = {
      //   backgroundColor: echarts.bg,
      //   color: [colors.danger, colors.primary, colors.info],
      //   tooltip: {
      //     trigger: 'item',
      //     formatter: '{a} <br/>{b} : {c}',
      //   },
      //   legend: {
      //     left: 'left',
      //     data: ['Line 1', 'Line 2', 'Line 3'],
      //     textStyle: {
      //       color: echarts.textColor,
      //     },
      //   },
      //   xAxis: [
      //     {
      //       type: 'category',
      //       data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      //       axisTick: {
      //         alignWithLabel: true,
      //       },
      //       axisLine: {
      //         lineStyle: {
      //           color: echarts.axisLineColor,
      //         },
      //       },
      //       axisLabel: {
      //         textStyle: {
      //           color: echarts.textColor,
      //         },
      //       },
      //     },
      //   ],
      //   yAxis: [
      //     {
      //       type: 'log',
      //       axisLine: {
      //         lineStyle: {
      //           color: echarts.axisLineColor,
      //         },
      //       },
      //       splitLine: {
      //         lineStyle: {
      //           color: echarts.splitLineColor,
      //         },
      //       },
      //       axisLabel: {
      //         textStyle: {
      //           color: echarts.textColor,
      //         },
      //       },
      //     },
      //   ],
      //   grid: {
      //     left: '3%',
      //     right: '4%',
      //     bottom: '3%',
      //     containLabel: true,
      //   },
      //   series: [
      //     {
      //       name: 'Line 1',
      //       type: 'line',
      //       data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
      //     },
      //     {
      //       name: 'Line 2',
      //       type: 'line',
      //       data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
      //     },
      //     {
      //       name: 'Line 3',
      //       type: 'line',
      //       data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
      //     },
      //   ],
      // };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

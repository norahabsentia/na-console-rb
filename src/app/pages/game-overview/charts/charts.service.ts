import {Injectable} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

interface ChartBuilder {
  options: any,
  series: any
}

@Injectable()
export class ChartsService {

  colors: any;
  chartjs: any;

  defaultBarOptions: any;
  defaultHorizontalBarOptions: any;
  defaultLineOptions: any;

  constructor(private theme: NbThemeService) {
    theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
      this.chartjs = config.variables.chartjs;

      this.defaultBarOptions = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: this.chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: this.chartjs.axisLineColor,
              },
              ticks: {
                fontColor: this.chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: this.chartjs.axisLineColor,
              },
              ticks: {
                fontColor: this.chartjs.textColor,
              },
            },
          ],
        },
      };
      this.defaultHorizontalBarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: this.chartjs.axisLineColor,
              },
              ticks: {
                fontColor: this.chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: this.chartjs.axisLineColor,
              },
              ticks: {
                fontColor: this.chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: this.chartjs.textColor,
          },
        },
      };
      this.defaultLineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: this.chartjs.axisLineColor,
              },
              ticks: {
                fontColor: this.chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: this.chartjs.axisLineColor,
              },
              ticks: {
                fontColor: this.chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: this.chartjs.textColor,
          },
        },
      };
    });
  }

  public buildChart(type: string, series: any, options: any): ChartBuilder {
    const prefix = this.toCapitalize(type);
    const method = '_build' + prefix + 'Chart';
    if (typeof this[method] === 'function') {
      return this[method].call(this, series, options);
    }
    return <ChartBuilder>{};
  }

  private _buildBarChart(series, options): ChartBuilder {
    options = options || this.defaultBarOptions;
    return {
      series,
      options,
    };
  }

  private _buildLineChart(series, options): ChartBuilder {
    options = options || this.defaultLineOptions;

    return {
      series,
      options,
    };
  }

  private _buildHorizontalBarChart(series, options): ChartBuilder {
    options = options || this.defaultHorizontalBarOptions;

    return {
      series,
      options,
    };
  }

  public toCapitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

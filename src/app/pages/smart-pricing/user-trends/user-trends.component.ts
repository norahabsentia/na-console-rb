import { Component, OnInit } from '@angular/core';
import {NbColorHelper, NbThemeService} from "@nebular/theme";

@Component({
  selector: 'user-trends',
  templateUrl: './user-trends.component.html',
  styleUrls: ['./user-trends.component.scss']
})
export class UserTrendsComponent implements OnInit {


  charts = ['Line', 'Bar', 'Table'
  ];

  colors: any;
  chartjs: any;

  affluenceSeries: any;
  countrySeries: any;
  mobileBrandSeries: any;
  currentLevelSeries: any;
  currentLevelOptions: any;
  actionsSeries: any;
  actionsSeriesOptions: any;
  skillsSeries: any;
  skillsSeriesOptions: any;
  loyaltySeries: any;
  outOfLivesSeries: any;
  sticknessSeries: any;
  sticknessSeriesOptions: any;
  appVersionSeries: any;
  appVersionOptions: any;
  DISTRIBUTIONShow;
  OVERVIEWShow;
  ENGAGEMENTShow;

  constructor(private theme: NbThemeService) {
    theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
      this.chartjs = config.variables.chartjs;
    });
  }

  ngOnInit() {

    this.affluenceSeries = {
      labels: ['afluance1', 'afluance2', 'afluance3', 'afluance4', 'afluance5', 'afluance6', 'afluance7'],
      datasets: [{
        data: [65, 59, 80, 91, 66, 55, 40],
        label: 'Actual churned',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.primaryLight, 0.8),
      }, {
        data: [55, 68, 40, 59, 80, 91, 66],
        label: 'Predicted to churn',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.infoLight, 0.8),
      }, {
        data: [40, 53, 25, 49, 65, 71, 50],
        label: 'Churned and Predicted',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.infoLight, 0.8),
      }, {
        data: [28, 30, 20, 15, 26, 7, 10],
        label: 'Predicted but not churned',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.infoLight, 0.8),
      }, {
        data: [12, 28, 6, 22, 16, 20, 11],
        label: 'Churned but not predicted',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.infoLight, 0.8),
      }],
    };

    this.countrySeries = {
      labels: ['country1', 'country2', 'country3', 'country4', 'country5', 'country6', 'country7', 'country8', 'country9', 'country10', '>5', '1to5', '<5'],
      datasets: [{
        label: 'Actual churned',
        backgroundColor: this.colors.infoLight,
        borderWidth: 1,
        data: [this.random_vhi(), this.random_vhi(), this.random_vhi(), this.random_hi(), this.random_hi(), this.random_hi(), this.random_mid(), this.random_mid(), this.random_lo(), this.random_lo(), this.random_hi(), this.random_lo(), this.random_vlo()],
      }, {
        label: 'Predicted to churn',
        backgroundColor: this.colors.successLight,
        data: [this.random_vhi(), this.random_vhi(), this.random_vhi(), this.random_hi(), this.random_hi(), this.random_hi(), this.random_mid(), this.random_mid(), this.random_lo(), this.random_lo(), this.random_hi(), this.random_lo(), this.random_vlo()],
      }, {
        label: 'Churned and Predicted',
        backgroundColor: this.colors.successLight,
        data: [this.random_hi(), this.random_hi(), this.random_hi(), this.random_mid(), this.random_mid(), this.random_mid(), this.random_lo(), this.random_lo(), this.random_vlo(), this.random_vlo(), this.random_mid(), this.random_vlo(), this.random_vlo()],
      }, {
        label: 'Predicted but not churned',
        backgroundColor: this.colors.successLight,
        data: [this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo()],
      }, {
        label: 'Churned but not predicted',
        backgroundColor: this.colors.successLight,
        data: [this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo(), this.random_lo()],
      }

      ],
    };

    this.mobileBrandSeries = {
      labels: ['mobile1', 'mobile2', 'mobile3', 'mobile4', 'mobile5', 'mobile6', 'mobile7', 'mobile8', 'mobile9', 'mobile10', '>5', '1to5', '<5'],
      datasets: [{
        data: [100, 90, 80, 70, 60, 50, 40, 30, 15, 5, 40, 20, 5],
        label: 'Actual churned',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.primary, 0.3),
        borderColor: echarts.axisLineColor,
      }, {
        data: [100, 95, 80, 75, 60, 55, 40, 35, 15, 5, 40, 20, 5],
        label: 'Predicted to churn',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.danger, 0.3),
        borderColor: this.colors.danger,
      }, {
        data: [95, 85, 75, 65, 55, 45, 35, 25, 10, 2.5, 30, 15, 3],
        label: 'Churned and Predicted',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.info, 0.3),
        borderColor: this.colors.info,
      }, {
        data: [30, 25, 30, 20, 25, 15, 20, 10, 10, 5, 3, 2, 1],
        label: 'Predicted but not churned',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.info, 0.3),
        borderColor: this.colors.info,
      }, {
        data: [30, 20, 25, 30, 20, 15, 25, 15, 10, 5, 3, 2, 1],
        label: 'Churned but not predicted',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.info, 0.3),
        borderColor: this.colors.info,
      },
      ],
    };

    this.currentLevelSeries = {
      labels: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L9', 'L10','L11', 'L12', 'L13', 'L14', 'L15', 'L16', 'L17', 'L18', 'L19', 'L20', 'L21', 'L22', 'L23', 'L24', 'L25', 'L26', 'L27', 'L28', 'L29', 'L30', 'L31', 'L32', 'L33', 'L34', 'L35', 'L36', 'L37', 'L38', 'L39', 'L40', 'L41', 'L42', 'L43', 'L44', 'L45', 'L46', 'L47', 'L48', 'L49', 'L50'],
      datasets: [{
        label: 'Actual churned',
        data: [this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.primary,
        backgroundColor: this.colors.primary,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted to churn',
        data: [this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.dangerLight,
        backgroundColor: this.colors.dangerLight,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned and Predicted',
        data: [this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.info,
        backgroundColor: this.colors.info,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted but not churned',
        data: [this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned but not predicted',
        data: [this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }],
    };
    this.currentLevelOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          fontColor: this.chartjs.textColor,
        },
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
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
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
            gridLines: {
              display: true,
              color: this.chartjs.axisLineColor,
            },
            ticks: {
              fontColor: this.chartjs.textColor,
            },
          },
        ],
      }
    };

    this.sticknessSeries = {
      labels: ['LS1', 'LS2', 'LS3', 'LS4', 'LS5', 'LS6', 'LS7', 'LS8', 'LS9', 'LS10','LS11', 'LS12', 'LS13', 'LS14', 'LS15', 'LS16', 'LS17', 'LS18', 'LS19', 'LS20', 'LS21', 'LS22', 'LS23', 'LS24', 'LS25', 'LS26', 'LS27', 'LS28', 'LS29', 'LS30', 'LS31', 'LS32', 'LS33', 'LS34', 'LS35', 'LS36', 'LS37', 'LS38', 'LS39', 'LS40', 'LS41', 'LS42', 'LS43', 'LS44', 'LS45', 'LS46', 'LS47', 'LS48', 'LS49', 'LS50'],
      datasets: [{
        label: 'Actual churned',
        data: [this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.primary,
        backgroundColor: this.colors.primary,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted to churn',
        data: [this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.mid_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.dangerLight,
        backgroundColor: this.colors.dangerLight,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned and Predicted',
        data: [this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.hi_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.info,
        backgroundColor: this.colors.info,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted but not churned',
        data: [this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned but not predicted',
        data: [this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random(), this.lo_random()],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }],
    };
    this.sticknessSeriesOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          fontColor: this.chartjs.textColor,
        },
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
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
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
            gridLines: {
              display: true,
              color: this.chartjs.axisLineColor,
            },
            ticks: {
              fontColor: this.chartjs.textColor,
            },
          },
        ],
      }
    };

    this.actionsSeries = {
      labels: ['LA1', 'LA2', 'LA3', 'LA4', 'LA5', 'LA6', 'LA7', 'LA8', 'LA9', 'LA10','>5', '1to2', '<5'],
      datasets: [{
        label: 'Actual churned',
        data: [100, 90, 80, 70, 60, 50, 40, 30, 15, 5, 40, 20, 5],
        borderColor: this.colors.primary,
        backgroundColor: this.colors.primary,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted to churn',
        data: [100, 91, 86, 74, 69, 55, 46, 35, 18, 4, 35, 15, 5],
        borderColor: this.colors.dangerLight,
        backgroundColor: this.colors.dangerLight,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned and Predicted',
        data: [85, 93, 77, 63, 57, 48, 32, 25, 8, 6, 30, 15, 3],
        borderColor: this.colors.info,
        backgroundColor: this.colors.info,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted but not churned',
        data: [30, 25, 30, 20, 25, 15, 20, 10, 10, 5, 3, 2, 1],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned but not predicted',
        data: [30, 20, 25, 30, 20, 15, 25, 15, 10, 5, 3, 2, 1],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }],
    };
    this.actionsSeriesOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          fontColor: this.chartjs.textColor,
        },
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
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
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
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

    this.skillsSeries = {
      labels: ['US1', 'US2', 'US3', 'US4', 'US5'],
      datasets: [{
        label: 'Actual churned',
        data: ['92', '78', '81', '64', '44'],
        borderColor: this.colors.primary,
        backgroundColor: this.colors.primary,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted to churn',
        data: ['87', '73', '82', '56', '49'],
        borderColor: this.colors.dangerLight,
        backgroundColor: this.colors.dangerLight,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned and Predicted',
        data: ['46', '36', '39', '34','30'],
        borderColor: this.colors.info,
        backgroundColor: this.colors.info,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted but not churned',
        data: ['20', '15', '19', '17', '8'],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned but not predicted',
        data: ['30', '21', '24', '13', '4'],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }],
    };
    this.skillsSeriesOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          fontColor: this.chartjs.textColor,
        },
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
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
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
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

    this.outOfLivesSeries = {
      labels: ['ol1', 'ol2', 'ol3', 'ol4', 'ol5'],
      datasets: [{
        data: [90, 75, 83, 66, 52],
        label: 'Actual churned',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.primary, 0.3),
        borderColor: echarts.axisLineColor,
      }, {
        data: [95, 79, 87, 61, 55],
        label: 'Predicted to churn',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.danger, 0.3),
        borderColor: this.colors.danger,
      }, {
        data: [75, 55, 66, 43, 37],
        label: 'Churned and Predicted',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.info, 0.3),
        borderColor: this.colors.info,
      }, {
        data: [30, 25, 15, 5, 3],
        label: 'Predicted but not churned',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.info, 0.3),
        borderColor: this.colors.info,
      }, {
        data: [27, 16, 23, 9, 6],
        label: 'Churned but not predicted',
        backgroundColor: NbColorHelper.hexToRgbA(this.colors.info, 0.3),
        borderColor: this.colors.info,
      },
      ]
    };

    this.loyaltySeries = {
      labels: ['LI1', 'LI2', 'LI3', 'LI4', 'LI5'],
      datasets: [{
        label: 'Actual churned',
        backgroundColor: this.colors.infoLight,
        borderWidth: 1,
        data: [this.random_vhi(), this.random_hi(), this.random_vhi(), this.random_hi(), this.random_mid()],
      }, {
        label: 'Predicted to churn',
        backgroundColor: this.colors.successLight,
        data: [this.random_vhi(), this.random_hi(), this.random_vhi(), this.random_hi(), this.random_mid()],
      }, {
        label: 'Churned and Predicted',
        backgroundColor: this.colors.successLight,
        data: [this.random_hi(), this.random_mid(), this.random_hi(), this.random_mid(), this.random_lo()],
      }, {
        label: 'Predicted but not churned',
        backgroundColor: this.colors.successLight,
        data: [this.random_lo(), this.random_lo(), this.random_lo(), this.random_vlo(), this.random_vlo()],
      }, {
        label: 'Churned but not predicted',
        backgroundColor: this.colors.successLight,
        data: [this.random_lo(), this.random_lo(), this.random_lo(), this.random_vlo(), this.random_vlo()],
      }
      ],
    };

    this.appVersionSeries = {
      labels: ['AP1', 'AP2', 'AP3', 'AP4', 'AP5', 'AP6', 'AP7', 'AP8'],
      datasets: [{
        label: 'Actual churned',
        data: ['58', '79', '71', '86', '75', '89', '92', '95'],
        borderColor: this.colors.primary,
        backgroundColor: this.colors.primary,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted to churn',
        data: ['63', '69', '84', '77', '85', '88', '91', '96'],
        borderColor: this.colors.dangerLight,
        backgroundColor: this.colors.dangerLight,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned and Predicted',
        data: ['47', '52', '44', '55', '64', '68', '73', '78'],
        borderColor: this.colors.info,
        backgroundColor: this.colors.info,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Predicted but not churned',
        data: ['5', '9', '13', '19', '26', '22', '24', '29'],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'Churned but not predicted',
        data: ['8', '5', '18', '22', '17', '25', '23', '28'],
        borderColor: this.colors.success,
        backgroundColor: this.colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }],
    };
    this.appVersionOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
        labels: {
          fontColor: this.chartjs.textColor,
        },
      },
      hover: {
        mode: 'index',
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
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
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
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
    }
  }

  private hi_random() {
    return Math.round(Math.random() * 100);
  }
  private mid_random() {
    return Math.round(Math.random() * 60);
  }
  private lo_random() {
    return Math.round(Math.random() * 10);
  }

  private random_vhi() {
    return Math.round(Math.random() * 100);
  }

  private random_hi() {
    return Math.round(Math.random() * 60);
  }

  private random_mid() {
    return Math.round(Math.random() * 40);
  }

  private random_lo() {
    return Math.round(Math.random() * 20);
  }

  private random_vlo() {
    return Math.round(Math.random() * 5);
  }
}

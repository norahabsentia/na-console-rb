import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-chartjs-line',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsLineComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      this.data= {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgba(110, 110, 110, 0.1)',
          borderColor: 'rgba(110, 110, 110, 0.1)',
          data: [
            {
              x: 20,
              y: 30
            }, {
              x: 35,
              y: 20
            }
          ],
          fill: false,
        }, {
          label: "My Second dataset",
          fill: false,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderColor: 'rgba(0, 0, 0, 0.1)',
          data: [
            {
              x: 10,
              y: 20
            }, {
              x: 15,
              y: 10
            }
          ],
        }]
      }

      var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.options = {
          responsive: true,
          title:{
            display:true,
            text:'Chart.js Line Chart'
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }]
          }
      };


    //
    //   this.options = {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //         scales: {
    //   xAxes: [{
    //     display: true,
    //     scaleLabel: {
    //       display: true,
    //       labelString: 'Month'
    //     }
    //   }],
    //   yAxes: [{
    //     display: true,
    //     scaleLabel: {
    //       display: true,
    //       labelString: 'Value'
    //     }
    //   }]
    // },
    //     // scales: {
    //     //   xAxes: [
    //     //     {
    //     //       gridLines: {
    //     //         display: true,
    //     //         color: chartjs.axisLineColor,
    //     //       },
    //     //       ticks: {
    //     //         fontColor: chartjs.textColor,
    //     //       },
    //     //     },
    //     //   ],
    //     //   yAxes: [
    //     //     {
    //     //       gridLines: {
    //     //         display: true,
    //     //         color: chartjs.axisLineColor,
    //     //       },
    //     //       ticks: {
    //     //         fontColor: chartjs.textColor,
    //     //       },
    //     //     },
    //     //   ],
    //     // },
    //     legend: {
    //       labels: {
    //         fontColor: chartjs.textColor,
    //       },
    //     },
    //   };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

// /*
//
//
// var config = {
//   type: 'line',
//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [{
//       label: "Unfilled",
//       fill: false,
//       backgroundColor: window.chartColors.blue,
//       borderColor: window.chartColors.blue,
//       data: [
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor()
//       ],
//     }, {
//       label: "Dashed",
//       fill: false,
//       backgroundColor: window.chartColors.green,
//       borderColor: window.chartColors.green,
//       borderDash: [5, 5],
//       data: [
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor()
//       ],
//     }, {
//       label: "Filled",
//       backgroundColor: window.chartColors.red,
//       borderColor: window.chartColors.red,
//       data: [
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor(),
//         randomScalingFactor()
//       ],
//       fill: true,
//     }]
//   },
//   options: {
//     responsive: true,
//     title:{
//       display:true,
//       text:'Chart.js Line Chart'
//     },
//     tooltips: {
//       mode: 'index',
//       intersect: false,
//     },
//     hover: {
//       mode: 'nearest',
//       intersect: true
//     },
//     scales: {
//       xAxes: [{
//         display: true,
//         scaleLabel: {
//           display: true,
//           labelString: 'Month'
//         }
//       }],
//       yAxes: [{
//         display: true,
//         scaleLabel: {
//           display: true,
//           labelString: 'Value'
//         }
//       }]
//     }
//   }
// };
//
// window.onload = function() {
//   var ctx = document.getElementById("canvas").getContext("2d");
//   window.myLine = new Chart(ctx, config);
// };
//   */

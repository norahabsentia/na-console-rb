import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbColorHelper, NbThemeService} from "@nebular/theme";
import {LocalDataSource} from "ng2-smart-table";
import {HttpClient} from "@angular/common/http";
import {SmartTableService} from "../../../@core/data/smart-table.service";
import {DataService} from "../../../@core/data/getcountrydata.service";

@Component({
  selector: 'revenue-recommendations-analysis',
  templateUrl: './revenue-recommendations-analysis.component.html',
  styleUrls: ['./revenue-recommendations-analysis.component.scss']
})
export class RevenueRecommendationsAnalysisComponent implements OnInit, OnDestroy {

  charts = [
    {
      type: 'Table',
      icon: 'fa-table',
      show: false,
      label: 'Display table',
    },
    {
      type: 'Histogram',
      icon: 'fa-bar-chart',
      show: true,
      label: 'Display stacked bar',
    },
  ];
  showDropdawn;
  dataBar1Options = this.charts[1];
  dataBar2Options = this.charts[1];
  dataBar3Options = this.charts[1];
  dataBar4Options = this.charts[1];
  dataBar5Options = this.charts[1];
  dataTable1 = [];
  dataTable2 = [];
  dataTable3 = [];
  dataTable4 = [];
  dataTable5 = [];
  data: any;
  options: any;
  themeSubscription: any;
  dataBar1: any;
  dataBar2: any;
  dataBar3: any;
  dataBar4: any;
  dataBar5: any;
  optionsBar: any;
  barSwitch1 = 'platform';
  barSwitch2 = 'country';
  barSwitch3 = 'engagement';
  barSwitch4 = 'total time in game';
  showDownload;
  showEngagement;
  showLocation;
  selectedLocation = "country";
  selectedEngagement = "current level";
  dataLocation= [
    {name: 'country'},
    {name: 'region'},
    {name: 'affluence'},
    {name: 'mobile brand'},
    {name: 'platform'},
    {name: 'app version'},
  ];
  dataEngagement = [
    {name: 'current level'},
    {name: 'engagement'},
    {name: 'total time in game'},
    {name: 'last action'},
    {name: 'level stickiness'},
    {name: 'loyalty'},
    {name: 'out of lives'},
  ];

  objEngagement = {
    'current level': {
      url: 'new2_currentlevel-aggr-format',
      lab: 'currentlevel'
    },
    'engagement': {
      url: 'new2_engagement-aggr-format',
      lab: 'Engagement'
    },
    'total time in game': {
      url: 'new2_Total time in game-aggr-format',
      lab: 'Total time in game'
    },
    'last action': {
      url: 'new2_lastaction-aggr-format',
      lab: 'LastAction'
    },
    'level stickiness': {
      url: 'new2_levelstickness-aggr-format',
      lab: 'Levelstickness'
    },
    'loyalty': {
      url: 'new2_Loyality-aggr-format',
      lab: 'Loyality'
    },
    'out of lives': {
      url: 'new2_out of lives-aggr-format',
      lab: 'Out of lives'
    },
  };

  objLocation = {
    'country': {
      url: 'basis of origin/new2_country-aggr-format',
      lab: 'country'
    },
    'region': {
      url: 'basis of origin/new2_region-aggr-format',
      lab: 'Region'
    },
    'affluence': {
      url: 'basis of origin/new2_afluance-aggr-format',
      lab: 'Affluence'
    },
    'mobile brand': {
      url: 'basis of origin/new2_mobiles-aggr-format',
      lab: 'Mobile'
    },
    'platform': {
      url: 'basis of origin/new2_platform-aggr-format',
      lab: 'Platform'
    },
    'app version': {
      url: 'basis of origin/new2_appversion-aggr-format',
      lab: 'AppVersion'
    },
    'current level': {
      url: 'basis of behavior/new2_currentlevel-aggr-format',
      lab: 'currentlevel'
    },
    'engagement': {
      url: 'basis of behavior/new2_engagement-aggr-format',
      lab: 'Engagement'
    },
    'skill': {
      url: 'basis of behavior/new2_engagement-aggr-format',
      lab: 'Engagement'
    },
    'total time in game': {
      url: 'basis of behavior/new2_Total time in game-aggr-format',
      lab: 'Total time in game'
    },
    'last action': {
      url: 'basis of behavior/new2_lastaction-aggr-format',
      lab: 'LastAction'
    },
    'level stickiness': {
      url: 'basis of behavior/new2_levelstickness-aggr-format',
      lab: 'Levelstickness'
    },
    'loyalty': {
      url: 'basis of behavior/new2_Loyality-aggr-format',
      lab: 'Loyality'
    },
    'out of lives': {
      url: 'basis of behavior/new2_out of lives-aggr-format',
      lab: 'Out of lives'
    },
  };
  clickLocation(item, bar, table, barSwitch){
    this[barSwitch] = item;
    this.showLocation = false;
    this[bar] = null;
    this[table] = null;

    this.http.get('../../../json/churn-predictions/' + this.objLocation[item].url +'.json').subscribe((res: any) => {
      this.setData(bar, res[this.objLocation[item].lab]);
      this[table] = res[this.objLocation[item].lab];
    });
  }
  // clickLocation(item){
  //   this.selectedLocation = item.name;
  //   this.showLocation = false;
  //   this.dataBar1 = null;
  //   this.dataTable1 = null;
  //
  //   this.http.get('../../../json/churn-predictions/basis of origin/' + this.objLocation[item.name].url +'.json').subscribe((res: any) => {
  //     this.setData('dataBar1', res[this.objLocation[item.name].lab]);
  //     this.dataTable1 = res[this.objLocation[item.name].lab];
  //   });
  // }
  clickEngagement(item){
    this.selectedEngagement = item.name;
    this.showEngagement = false;
    this.dataBar2 = null;
    this.dataTable2 = null;
    this.http.get('../../../json/churn-predictions/basis of behavior/' + this.objEngagement[item.name].url +'.json').subscribe((res: any) => {
      this.setData('dataBar2', res[this.objEngagement[item.name].lab]);
      this.dataTable2 = res[this.objEngagement[item.name].lab];

    });

  }

  changeUserDistribution(item){
    this.dataBar1Options = item;
    console.log(item)
  }

  changeUserDistribution2(item){
    this.dataBar2Options = item;

    console.log(item)
  }

  settings = {
    hideSubHeader: false,
    actions: false,
    columns: {
      ProductID: {
        title: 'User ID',
        type: 'number',
        editable: false,
        filter: false,
        width: '50%'
      },
      AndroidBase: {
        title: 'Churn Probability',
        type: 'string',
        editable: false,
        filter: false,
        width: '50%'
      },
    },
  };
  optionsBars

  source: LocalDataSource = new LocalDataSource();
  public tabledata: any

  churn = {
    "high_risk":0,
    "med_risk":0,
    "low_risk":0
  }
  constructor(private theme: NbThemeService, private service: SmartTableService, public dataservice: DataService, private http: HttpClient) {

    const data = this.service.getData();
    this.source.load(data);

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.http.get('../../../../json/churn-predictions/sample_churn_predictions.json').subscribe((res: any) => {
        this.churn = res.churn;
        this.data = {
          labels: ['buy', 'not buy'],
          datasets: [{
            data: [this.churn.high_risk, this.churn.med_risk],
            backgroundColor: ['#4aa3df', '#dddde0'],
          }],
        };
      });

      this.optionsBars = {
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

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend:{
          display:false
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        // legend: {
        //   labels: {
        //     fontColor: chartjs.textColor,
        //   },
        // },
      };

      let barOptions = {
        animation: {
          duration: 10,
        },
        tooltips: {
          mode: 'label',
        },
        scales: {
          xAxes: [{
            // stacked: true,
            gridLines: { display: false },
          }],
          yAxes: [{
            // stacked: true,

          }],
        }, // scales
        legend: {display: true}
      }
      this.http.get('../../../../json/churn-predictions/basis of origin/new2_platform-aggr-format.json').subscribe((res: any) => {
        this.setData('dataBar1', res.Platform);
        this.setChartBarData(res.Platform);
        this.dataTable1 = res.Platform;
      });
      this.http.get('../../../../json/churn-predictions/basis of origin/new2_country-aggr-format.json').subscribe((res: any) => {
        this.setData('dataBar2', res.country);
        this.dataTable2 = res.country;
      });

      this.http.get('../../../../json/churn-predictions/basis of behavior/new2_engagement-aggr-format.json').subscribe((res: any) => {
        this.setData('dataBar3', res.Engagement);
        this.dataTable3 = res.Engagement;
      });
      this.http.get('../../../../json/churn-predictions/basis of behavior/new2_Total time in game-aggr-format.json').subscribe((res: any) => {
        this.setData('dataBar4', res['Total time in game']);
        this.dataTable4 = res['Total time in game'];
      });
      this.http.get('../../../../json/churn-predictions/basis of behavior/new2_currentlevel-aggr-format.json').subscribe((res: any) => {
        this.setData('dataBar5', res['currentlevel']);
        this.dataTable5 = res['currentlevel'];
      });
      // this.setData('dataBar2');

    //   this.http.get('../../../json/churn-predictions/basis of behavior/new2_currentlevel-aggr-format.json').subscribe((res: any) => {
    //     this.setData('dataBar2', res['currentlevel']);
    //     this.dataTable2 = res.currentlevel;
    //   });
      this.optionsBar = barOptions;
    });
  }

  ngOnInit(){
    this.getDataFromJson()

  }
  dataBar;
  setChartBarData(data){
    let labels = [];
    let keys =[];
    let datasets = [];
    if(data){
      for(let item of data){
        labels.push(item.value);

        keys = Object.keys(item);
      }
      keys.splice(keys.indexOf('value'), 1);
      for(let key of keys){
        let arr = [];
        for(let item of data){
          arr.push(item[key]);
          console.log(item[key])
        }
        console.log(arr)

        datasets.push({
          data: arr,
          label: key,
          backgroundColor: NbColorHelper.hexToRgbA(this.getRandomColor(), 0.8),
        })
      }
    }

    this.dataBar = {
      labels: labels,
      datasets: datasets,
    };
    console.log(this.dataBar)
  }
  setData(i, data){
    let labels = [];
    let High_Risk = [];
    let Medium_Risk = [];
    let Low_Risk = [];
    for(let item of data){
      labels.push(item.value);
      High_Risk.push(item.High_Risk);
      Medium_Risk.push(item.Medium_Risk);
      Low_Risk.push(item.Low_Risk);
    }
    this[i] = {
      labels: labels,
      datasets: [
        {
          label: 'high risk',
          data: High_Risk,
          backgroundColor: "#4aa3df",
          hoverBackgroundColor: "#4aa3df",
          hoverBorderWidth: 2,
          hoverBorderColor: 'lightgrey'
        },
        {
          label: 'medium risk',
          data: Medium_Risk,
          backgroundColor: "#81b7dc",
          hoverBackgroundColor: "#81b7dc",
          hoverBorderWidth: 2,
          hoverBorderColor: 'lightgrey'
        },
        {
          label: 'low risk',
          data: Low_Risk,
          backgroundColor: "#dddde0",
          hoverBackgroundColor: "#dddde0",
          hoverBorderWidth: 2,
          hoverBorderColor: 'lightgrey'
        }
      ],
    };
  }

  getDataFromJson() {
    this.dataservice.getData().subscribe((data) => {
      this.tabledata = data.data;
    });

  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}

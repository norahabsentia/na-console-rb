import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbColorHelper, NbThemeService} from "@nebular/theme";
import {LocalDataSource} from "ng2-smart-table";
import {DataService} from "../../@core/data/getcountrydata.service";
import {SmartTableService} from "../../@core/data/smart-table.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'churn-predictions',
  templateUrl: './churn-predictions.component.html',
  styleUrls: ['./churn-predictions.component.scss']
})
export class ChurnPredictionsComponent implements OnInit, OnDestroy {

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

  charts1 = [
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
  charts2 = [
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

  charts3 = [
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

  charts4 = [
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
  charts5 = [
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





  relativeChartPath = '../../../json/nazara/retention_booster/churn_predictions/charts/';
  relativeTablePath = '../../../json/nazara/retention_booster/churn_predictions/tables/';
  relativeStatsPath = '../../../json/nazara/retention_booster/churn_predictions/overview/';


  dataBar1Options = this.charts[1];
  dataBar2Options = this.charts[1];
  dataBar3Options = this.charts[1];
  dataBar4Options = this.charts[1];
  dataBar5Options = this.charts[1];

  userIdTable = [];
  dataTable1keys = [];
  dataTable2keys = [];
  dataTable3keys = [];
  dataTable4keys = [];
  dataTable5keys = [];


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
      url: 'country',
      tableurl: 'country',
      lab: 'country'
    },
    'region': {
      url: 'region',
      tableurl: 'region',
      lab: 'region'
    },
    'affluence': {
      url: 'affluence',
      tableurl: 'affluence',
      lab: 'affluence'
    },
    'mobile brand': {
      url: 'mobile_brand_name',
      tableurl: 'mobile_brand_name',
      lab: 'mobile_brand_name'
    },
    'platform': {
      url: 'platform',
      tableurl: 'platform',
      lab: 'platform'
    },
    'app version': {
      url: 'app_version',
      tableurl: 'app_version',
      lab: 'app_version'
    },
    'current level': {
      url: 'current_level',
      tableurl: 'current_level',
      lab: 'current_level'
    },
    'engagement': {
      url: 'engagement',
      tableurl: 'engagement',
      lab: 'engagement'
    },
    'skill': {
      url: 'user_skill',
      tableurl: 'user_skill',
      lab: 'user_skill'
    },
    'total time in game': {
      url: 'total_time_spent',
      tableurl: 'total_time_spent',
      lab: 'total_time_spent'
    },
    'last action': {
      url: 'last_action',
      tableurl: 'last_action',
      lab: 'last_action'
    },
    'level stickiness': {
      url: 'level_stickiness',
      tableurl: 'level_stickiness',
      lab: 'stuck_at_a_level'
    },
    'loyalty': {
      url: 'loyalty_index',
      tableurl: 'loyalty_index',
      lab: 'loyalty_index'
    },
    'out of lives': {
      url: 'out_of_lives',
      tableurl: 'out_of_lives',
      lab: 'out_of_lives'
    },
  };

  clickLocation(item, bar, table, tablekeys, barSwitch){
    this[barSwitch] = item;
    this.showLocation = false;
    this[bar] = null;
    this[table] = null;

    this.http.get(this.relativeChartPath + this.objLocation[item].url +'.json').subscribe((res: any) => {
      this.setData(bar, res[this.objLocation[item].lab]);
    });
    this.http.get(this.relativeTablePath + this.objLocation[item].tableurl +'.json').subscribe((res: any) => {
      this[table] = res[this.objLocation[item].lab];
      this.setDataForTable(tablekeys, this[table]);
    });
  }


  /*clickLocation(item, bar, table, barSwitch){
    this[barSwitch] = item;
    this.showLocation = false;
    this[bar] = null;
    this[table] = null;

    this.http.get('../../../json/churn-predictions/' + this.objLocation[item].url +'.json').subscribe((res: any) => {
      this.setData(bar, res[this.objLocation[item].lab]);
      this[table] = res[this.objLocation[item].lab];
    });
  }*/
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
      value: {
        title: 'User ID',
        type: 'number',
        editable: false,
        filter: false,
        width: '50%'
      },
      probability: {
        title: 'Churn Probability',
        type: 'string',
        editable: false,
        filter: false,
        width: '50%'
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  public tabledata: any

  churn = {
    "High_Risk":0,
    "Medium_Risk":0,
    "Low_Risk":0,
    "Observation_Period_Start": "",
    "Observation_Period_End": "",
    "Churn_Period_Start": "",
    "Churn_Period_End": ""
  }
  constructor(private theme: NbThemeService, private service: SmartTableService, public dataservice: DataService, private http: HttpClient) {

    const data = this.service.getData();
    this.source.load(data);

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      //this.http.get('../../../json/churn-predictions/sample_churn_predictions.json').subscribe((res: any) => {
      this.http.get(this.relativeStatsPath + 'stats.json').subscribe((res: any) => {
        this.churn = res;
        this.data = {
          labels: ['High Risk', 'Medium Risk', 'Low Risk'],
          datasets: [{
            data: [this.churn.High_Risk, this.churn.Medium_Risk, this.churn.Low_Risk],
            backgroundColor: ['#4aa3df', '#81b7dc', '#dddde0'],
          }],
        };
      });


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
            stacked: true,
            gridLines: { display: false },
          }],
          yAxes: [{
            stacked: true,

          }],
        }, // scales
        legend: {display: true}
      }
      this.http.get(this.relativeChartPath + this.objLocation['platform'].url +'.json').subscribe((res: any) => {
        console.log("11111",res[this.objLocation['platform'].lab]);
        this.setData('dataBar1', res[this.objLocation['platform'].lab]);
      });
      this.http.get(this.relativeTablePath + this.objLocation['platform'].tableurl +'.json').subscribe((res: any) => {
        this.dataTable1 = res[this.objLocation['platform'].lab];
        this.setDataForTable('dataTable1keys', this.dataTable1);
      });
      //this.http.get('../../../json/churn-predictions/basis of origin/new2_country-aggr-format.json').subscribe((res: any) => {
      this.http.get(this.relativeChartPath + this.objLocation['country'].url +'.json').subscribe((res: any) => {
        this.setData('dataBar2', res[this.objLocation['country'].lab]);
      });
      this.http.get(this.relativeTablePath + this.objLocation['country'].tableurl +'.json').subscribe((res: any) => {
        this.dataTable2 = res[this.objLocation['country'].lab];
        this.setDataForTable('dataTable2keys', this.dataTable2);
      });

      //this.http.get('../../../json/churn-predictions/basis of behavior/new2_engagement-aggr-format.json').subscribe((res: any) => {
      this.http.get(this.relativeChartPath + this.objLocation['engagement'].url +'.json').subscribe((res: any) => {
        this.setData('dataBar3', res[this.objLocation['engagement'].lab]);
      });
      this.http.get(this.relativeTablePath + this.objLocation['engagement'].tableurl +'.json').subscribe((res: any) => {
        this.dataTable3 =  res[this.objLocation['engagement'].lab];
        this.setDataForTable('dataTable3keys', this.dataTable3);
        console.log("111111111",this.dataTable3);
      });
      //this.http.get('../../../json/churn-predictions/basis of behavior/new2_Total time in game-aggr-format.json').subscribe((res: any) => {
      this.http.get(this.relativeChartPath + this.objLocation['total time in game'].url +'.json').subscribe((res: any) => {
        this.setData('dataBar4', res[this.objLocation['total time in game'].lab]);
      });
      this.http.get(this.relativeTablePath + this.objLocation['total time in game'].tableurl +'.json').subscribe((res: any) => {
        this.dataTable4 = res[this.objLocation['total time in game'].lab];
        this.setDataForTable('dataTable4keys', this.dataTable4);
      });
      //this.http.get('../../../json/churn-predictions/basis of behavior/new2_currentlevel-aggr-format.json').subscribe((res: any) => {
      this.http.get(this.relativeChartPath + this.objLocation['current level'].url +'.json').subscribe((res: any) => {
        this.setData('dataBar5', res[this.objLocation['current level'].lab]);
      });
      this.http.get(this.relativeTablePath + this.objLocation['current level'].tableurl +'.json').subscribe((res: any) => {
        this.dataTable5 = res[this.objLocation['current level'].lab];
        this.setDataForTable('dataTable5keys', this.dataTable5);
      });
      this.http.get(this.relativeTablePath+'user_churn_probability.json').subscribe((res: any) => {
        this.userIdTable = res.user_churn_risk;
        this.source = res.user_churn_risk;
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

  setDataForTable(i,dataTable){
     let keys = [];
     let series = [];
     for(let item of dataTable) {
      console.log("key item",item);
      keys = Object.keys(item);
        console.log("key 11",keys);
        for (let keyi in keys) {
         let key = keys[keyi];
         console.log("key",key);
         if(this[i].includes(key)){

         } else {
           this[i].push(key)
         }
        }

     }
  }

  setData(i, data){
    /*let labels = [];
    let High_Risk = [];
    let Medium_Risk = [];
    let Low_Risk = [];
    for(let item of data){
      labels.push(item.value);
      High_Risk.push(item.High_Risk);
      Medium_Risk.push(item.Medium_Risk);
      Low_Risk.push(item.Low_Risk);
    }*/

    let labels = [];
    let keys =[];
    let datasets = [];
    let objData = {};
    let colors = [];
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
        }
        objData[key] = arr;
      }
    }

    var index = 0;
    for (var k in objData){
     console.log("1111",objData[k]);
     var color = this.getChartColor(index);
     index = index + 1;
     datasets.push({
        //label: 'Churned users',
        label: k,
        data: objData[k],
        //backgroundColor: "#4aa3df",
        backgroundColor: color,
        //hoverBackgroundColor: "#4aa3df",
        hoverBackgroundColor: color,
        hoverBorderWidth: 2,
        hoverBorderColor: '#dddde0',
        hidden: index>4?true:false
      });
    }
    this[i] = {
      labels: labels,
      datasets: datasets
      /*datasets: [
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
      ],*/
    };
  }

  toggleDownload(){


    this.showDownload = !this.showDownload;

  }

  getDataFromJson() {
    this.dataservice.getData().subscribe((data) => {
      this.tabledata = data.data;
    });

  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  getChartColor(index) {
      /*var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }*/
      var colors = ['#dddde0', '#81b7dc','#4aa3df']
      return colors[index%colors.length];
    }

}

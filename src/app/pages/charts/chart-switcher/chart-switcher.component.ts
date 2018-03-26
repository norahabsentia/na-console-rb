import {Component, Input, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {SmartTableService} from "../../../@core/data/smart-table.service";
import {DataService} from "../../../@core/data/getcountrydata.service";
import {NbColorHelper, NbThemeService} from "@nebular/theme";

@Component({
  selector: 'chart-switcher',
  templateUrl: './chart-switcher.component.html',
  styleUrls: ['./chart-switcher.component.scss']
})
export class ChartSwitcherComponent implements OnInit {


   multi;
  view;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;

  dataTablekeys = [];

  colorScheme = {
    domain: ['#4aa3df', '#ebebee']
  };


  onSelect(event) {
    console.log(event);
  }

  dataT = [
    {
      "ProductID": "12321312",
      "BasePrice": "10000",
      "RPRMax": 50,
      "RPRMin": 10,
      "CPRMax": 50,
      "CPRMin": 10,
    },
    {
      "ProductID": "12321312",
      "BasePrice": "10000",
      "RPRMax": 50,
      "RPRMin": 10,
      "CPRMax": 50,
      "CPRMin": 10,
    },
  ];

  dataTCopy = [];

  showSelectItems;
  charts = [
    // {
    //   type: 'Area',
    //   icon: 'fa-area-chart',
    //   show: false,
    //   label: 'Display simple area chart',
    // },
    // {
    //   type: 'Pie',
    //   icon: 'fa-pie-chart',
    //   show: true,
    //   label: 'Display pie chart',
    //
    // },
    // {
    //   type: 'Line',
    //   icon: 'fa-line-chart',
    //   show: false,
    //   label: 'Display line chart',
    //
    // },
    // {
    //   type: 'Bar',
    //   icon: 'fa-bar-chart',
    //   show: false,
    //   label: 'Display bar chart',
    // },

    {
      type: 'StackBar',
      icon: 'fa-bar-chart',
      show: true,
      label: 'Display bar chart',
    },

    {
      type: 'Table',
      icon: 'fa-table',
      show: false,
      label: 'Display table',
    },
    // {
    //   type: 'Histogram',
    //   icon: 'fa-bar-chart',
    //   show: false,
    //   label: 'Display Histogram chart',
    // },

  ]
  change() {
    this.showSelectItems = true;
  }
  select(item) {
    for(let o of this.charts){
      o.show = false;
    }

    item.show = true;
    this.showSelectItems = false;
  }


  selectedLocation = 'Overview';
  showLocation;
  dataLocation= [
  ];

  source: LocalDataSource = new LocalDataSource();
  public tabledata: any

  //map
  latlong: any = {};
  mapData: any[];
  max = -Infinity;
  min = Infinity;
  options: any;
  optionsBar;
  bubbleTheme: any;
  geoColors: any[];
  themeSubscription: any;

  dataBar;
  dataLine;
  dataEBar;
  dataEPie;
  dataStackBarHorizontal = [

  ];

  optionsBarHorizontal = {
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

  @Input() title;
  @Input() showMap;
  @Input() data;
  @Input() dataTable;
  @Input() optionClass;
  @Input() optionsSettings;
  @Input() countryMapData;

  constructor(private service: SmartTableService, public dataservice: DataService, private theme: NbThemeService) {
    const data = this.service.getData();
    this.source.load(data);

    console.log("SAGR class",this.optionClass);

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      // this.data = {
      //   // labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
      //   datasets: [{
      //     data: [300, 500, 100],
      //     backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
      //   }],
      // };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
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


      this.optionsBar = barOptions;
    });
  }

  setChartBarData(){
    let labels = [];
    let keys =[];
    let datasets = [];
    if(this.data){
      for(let item of this.data){
        labels.push(item.value);

        keys = Object.keys(item);
      }
      keys.splice(keys.indexOf('value'), 1);
      for(let key of keys){
        let arr = [];
        for(let item of this.data){
          arr.push(item[key]);
        }
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
  }

  setChartLineData(){
    let labels = [];
    let keys =[];
    let datasets = [];
    if(this.data){
      for(let item of this.data){
        labels.push(item.value);

        keys = Object.keys(item);
      }
      keys.splice(keys.indexOf('value'), 1);
      for(let key of keys){
        let arr = [];
        for(let item of this.data){
          arr.push(item[key]);
        }
        datasets.push({
          data: arr,
          //backgroundColor: NbColorHelper.hexToRgbA(this.getRandomColor(), 0.8),
          backgroundColor: ['#0f6277','#3f3f3f'],
          name: key,
          type:'line',
          stack: '总量',
        })
      }
    }
console.log(datasets, keys, 999999999999999999999999999999)
    this.dataLine = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: keys
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
        data: labels
      },
      yAxis: {
        type: 'value'
      },
      series: datasets
    }
  }
  reload = true;
  setChartEBarData(i){
    this.dataEBar = null;
    this.reload = false;
    setTimeout(() => {
      this.reload = true;
      setTimeout(() => {
          if(document.getElementById('echartsbar'))
        document.getElementById('echartsbar').click();
      }, 100);
    }, 100);
    let labels = [];
    let keys =[];
    let datasets = [];
    if(this.data){
      for(let item of this.data){
        labels.push(item.value);

        keys = Object.keys(item);
      }
      keys.splice(keys.indexOf('value'), 1);
      for(let key of keys){
        let arr = [];
        for(let item of this.data){
          arr.push(item[key]);
        }
        datasets.push({
          data: arr,
          // label: key,
          // backgroundColor: NbColorHelper.hexToRgbA(this.getRandomColor(), 0.8),
          name: key,
          type: 'bar',
          barWidth: '60%',
        })
      }
    }
    this.dataLocation = keys;
    this.selectedLocation = this.dataLocation[i];
    console.log( datasets[i], i)
    this.dataEBar = {
      backgroundColor: echarts.bg,
      color: [this.getRandomColor()],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: labels,
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
          type: 'value',
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
      series: [
        datasets[i]
      ],
    };
  }

  setChartEPieData(i){
    this.dataEPie = null;
    this.reload = false;
    setTimeout(() => {
      this.reload = true;
      setTimeout(() => {

        document.getElementById('echartspie').click();
      }, 100);
    }, 100);
    let labels = [];
    let keys =[];
    let datasets = [];
    let colors = [];
    if(this.data){
      for(let item of this.data){
        labels.push(item.value);

        keys = Object.keys(item);
      }
      keys.splice(keys.indexOf('value'), 1);
      for(let key of keys){

        let arr = [];
          for(let i = 0; i < this.data.length; i++){

          arr.push({ value: this.data[i][key], name: labels[i] });
        }
        colors.push(this.getRandomColor());
        datasets.push(
          arr
        )
      }
    }
    this.dataLocation = keys;
    this.selectedLocation = this.dataLocation[i];
    console.log(datasets, datasets[i], i)
    this.dataEPie = {
      backgroundColor: echarts.bg,
      color: colors,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: labels,
        textStyle: {
          color: echarts.textColor,
        },
      },
      series: [
        {
          // name: 'Countries',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: datasets[i],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor,
            },
          },
          label: {
            normal: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
          },
        },
      ],
    };
  }

   getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }


  clickLocation(i){
    this.selectedLocation = i;
    this.showLocation = false;
    for( let item of this.charts){
      if(item.show && item.type === 'Histogram'){
        this.setChartEBarData(this.dataLocation.indexOf(i));
      }
      if(item.show && item.type === 'Pie'){
        this.setChartEPieData(this.dataLocation.indexOf(i));
      }
      if(item.show && item.type === 'StackBar'){
        this.setData();
      }
    }

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  option = {};

  refresh(i){
    //console.log(i, this.dataTCopy[i], this.dataT[i])
    this.dataTCopy[i] = Object.assign([], this.dataT[i]);
    this.dataTCopy[i] =  {
      "ProductID": "12321312",
      "BasePrice": "10000",
      "RPRMax": 50,
      "RPRMin": 10,
      "CPRMax": 50,
      "CPRMin": 10,
    };
  }

  remove(i){
    this.dataT.splice(i, 1);
    this.dataTCopy.splice(i, 1);
  }

  ngOnInit() {
    this.dataTCopy = Object.assign([], this.dataT);

    this.getDataFromJson();

    console.log("SAGR class",this.optionClass);
    if(this.optionsSettings){
      this.charts = this.optionsSettings;
    }
    if(this.showMap){
      this.charts.push( {
        type: 'Map',
        icon: 'fa-map',
        show: true,
        label: 'Display gradient map',
      });

      this.select(this.charts[this.charts.length - 1]);
    }

    // this.setChartBarData();
    this.setChartLineData();
    // this.setChartEBarData(0);
    // this.setChartEPieData(0);
    this.setData();
    this.setDataForTable();
    this.setDataTohorizontalBar();
  }
  getDataFromJson() {
    this.dataservice.getData().subscribe((data) => {
        this.tabledata = data.data;
      });

  }
  changeonddl(): void {
  }

  setDataTohorizontalBar(){
    for(let item of this.data) {
      let keys = []
      let series = [];
      keys = Object.keys(item);
      keys.splice(keys.indexOf('value'), 1);
      // for(let key of keys){
      //   series.push({
      //     "name": key,
      //     "value": item[key]
      //   })
      // }
      var index = 0;
      for (let key of keys){
         var color = this.getRandomColor();
         index = index + 1;
      console.log(9999999999999999, item)
        series.push({
          //"name": 'pop_churned',
          "name": key,
          //"value": item['pop_churned']
          "value": item[key],
          //backgroundColor: "#4aa3df",
          backgroundColor: color,
          //hoverBackgroundColor: "#4aa3df",
          hoverBackgroundColor: color,
          hoverBorderWidth: 2,
          hoverBorderColor: '#dddde0',
          hidden: index>4?true:false
        }
/*,{
          "name": 'pop_notChurned',
          "value": item['pop_notChurned']
        }
*/
)
      }
      this.dataStackBarHorizontal.push({
        "name": item.value,
        "series": series
      })

    }
      // {
      //   "Platform": [
      //   {"value": "Andriod", "High_Risk": 823, "Medium_Risk": 6121, "Low_Risk": 9266} ,
      //   {"value": "IOS", "High_Risk": 813, "Medium_Risk": 6868, "Low_Risk": 9428} ,
      //   {"value": "Windows", "High_Risk": 952, "Medium_Risk": 7070, "Low_Risk": 9397}
      // ]
      // }

    this.view = [400, 450];
  }
  setDataForTable(){
     let keys = [];
     let series = [];
     for(let item of this.dataTable) {
      console.log("key item",item);
      keys = Object.keys(item);
        console.log("key 11",keys);
        for (let keyi in keys) {
         let key = keys[keyi];
         console.log("key",key);
         if(this.dataTablekeys.includes(key)){

         } else {
           this.dataTablekeys.push(key)
         }
        }

     }
  }
  dataBar1
  setData(){
    this.reload = false;
    setTimeout(() => {
      this.reload = true;
      setTimeout(() => {

        document.getElementById('stackbar').click();
      }, 100);
    }, 100);
    this.dataLocation = [
      'Overview',
      'Detailed summary',
      'Churned users summary'
    ]
    let labels = [];
    let keys =[];
    let datasets = [];
    let objData = {};
    let colors = [];
    if(this.data){
      for(let item of this.data){
        labels.push(item.value);

        keys = Object.keys(item);
      }
      keys.splice(keys.indexOf('value'), 1);
      for(let key of keys){
        let arr = [];
        for(let item of this.data){
          arr.push(item[key]);
        }
        objData[key] = arr;
      }
    }

    /*if (this.selectedLocation === 'Overview') {
      datasets.push({
        label: 'Churned users',
        data: objData['pop_churned'],
        backgroundColor: "#4aa3df",
        hoverBackgroundColor: "#4aa3df",
        hoverBorderWidth: 2,
        hoverBorderColor: '#dddde0'
      });
      datasets.push({
        label: 'Not-Churned users',
        data: objData['pop_notChurned'],
        backgroundColor: "#dddde0",
        hoverBackgroundColor: "#dddde0",
        hoverBorderWidth: 2,
        hoverBorderColor: '#dddde0',
        hidden: true
      });
    }

    if (this.selectedLocation === 'Detailed summary') {
      datasets.push({
        label: 'Accurate churned user predictions',
        data: objData['pop_churnedPredicted'],
        backgroundColor: "#4aa3df",
        hoverBackgroundColor: "#4aa3df",
        hoverBorderWidth: 2,
        hoverBorderColor: '#dddde0'
      });
      datasets.push({
        label: 'False negatives',
        data: objData['pop_churnedNotPredicted'],
        backgroundColor: "#81b7dc",
        hoverBackgroundColor: "#81b7dc",
        hoverBorderWidth: 2,
        hoverBorderColor: '#dddde0'
      });
      datasets.push({
        label: 'False positives',
        data: objData['pop_notchurnedPredicted'],
        backgroundColor: "#bcbabe",
        hoverBackgroundColor: "#bcbabe",
        hoverBorderWidth: 2,
        hoverBorderColor: '#dddde0'
      });
      datasets.push({
        label: 'Accurate not-churned user predictions',
        data: objData['pop_notchurnedNotpredicted'],
        backgroundColor: "#dddde0",
        hoverBackgroundColor: "#dddde0",
        hoverBorderWidth: 2,
        hoverBorderColor: '#dddde0'
      });
      // {
      //   label: 'dataPack3',
      //   data: dataPack3,
      //
      //   backgroundColor: "#dddde0",
      //   hoverBackgroundColor: "#dddde0",
      //   hoverBorderWidth: 2,
      //   hoverBorderColor: '#81b7dc'
      // }
    }

    if (this.selectedLocation === 'Churned users summary') {
      datasets.push({
        label: 'Predicted to churn',
        data: objData['pop_churnedPredicted'],
        backgroundColor: "#4aa3df",
        hoverBackgroundColor: "#4aa3df",
        hoverBorderWidth: 2,
        hoverBorderColor: '#dddde0'
      });
      datasets.push({
        label: 'Not predicted to churn',
        data: objData['pop_churnedNotPredicted'],
        backgroundColor: "#dddde0",
        hoverBackgroundColor: "#dddde0",
        hoverBorderWidth: 2,
        hoverBorderColor: '#dddde0'
      });
    }*/

    var index = 0;
    for (var k in objData){
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
        width:'20%',
        hidden: index>4?true:false
      });
    }


    console.log(this.data, labels, datasets, objData)
    this.dataBar1 = {
      labels: labels,
      datasets: datasets
        // [
        // {
        //   label: 'dataPack1',
        //   data: dataPack1,
        //   backgroundColor: "#81b7dc",
        //   hoverBackgroundColor: "#81b7dc",
        //   hoverBorderWidth: 2,
        //   hoverBorderColor: '#dddde0'
        // },
        // {
        //   label: 'dataPack2',
        //   data: dataPack2,
        //   backgroundColor: "#bcbabe",
        //   hoverBackgroundColor: "#bcbabe",
        //   hoverBorderWidth: 2,
        //   hoverBorderColor: '#bcbabe'
        // },
        // {
        //   label: 'dataPack3',
        //   data: dataPack3,
        //
        //   backgroundColor: "#dddde0",
        //   hoverBackgroundColor: "#dddde0",
        //   hoverBorderWidth: 2,
        //   hoverBorderColor: '#81b7dc'
        // }
      // ],
    };
  }
 
  getChartColor(index) {
      /*var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }*/
    
      var colors = ['#4aa3df','#dddde0']

      let keys = [];
      let length = 0;
      let max = 3;
      for(let item of this.dataTable) {
        console.log("key item",item);
        keys = Object.keys(item);       
        if(keys.length  > max){
          max = keys.length;
        }
      }

      length = max;
      console.log("SAGAR LENGTH",length);
      if(length ==5){

        colors = ['#4aa3df', '#81b7dc', '#bcbabe', '#dddde0']
      }


      return colors[index%colors.length];
  }
}

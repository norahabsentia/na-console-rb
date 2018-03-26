import {Component, Input, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {SmartTableService} from "../../../@core/data/smart-table.service";
import {DataService} from "../../../@core/data/getcountrydata.service";
import {NbThemeService} from "@nebular/theme";

@Component({
  selector: 'chart-switcher-smart-price',
  templateUrl: './chart-switcher.component.html',
  styleUrls: ['./chart-switcher.component.scss']
})
export class ChartSwitcherSmartPriceComponent implements OnInit {

  showSelectItems;
  charts = [


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


  settings = {
    hideSubHeader: false,
    actions:
      {
        position: 'right',
        add : false,
        custom: [
          {
            name: '<i class="nb-loop" (click)="onClick()"></i>',
            title: '<i class="nb-loop" (click)="onClick()"></i>',
          },
        ],
      },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    reset: {
      reset: '<i class="nb-loop"></i>',
    },
    columns: {
      ProductID: {
        title: 'Product ID',
        type: 'number',
        editable: false,
        filter: false,
      },
      AndroidBase: {
        title: 'Android Base Price',
        type: 'string',
        editable: false,
        filter: false,
      },
      IOSBase: {
        title: 'IOS Base Price',
        type: 'string',
        editable: false,
        filter: false,
      },
      AndroidRecommended: {
        title: 'Android Recommended Price Range',
        type: 'string',
        editable: false,
        filter: false,
      },
      IOSRecommended: {
        title: 'IOS Recommended Price Range',
        type: 'string',
        editable: false,
        filter: false,
      },
      AndroidCustom: {
        title: 'Android Custom Price Range',
        type: 'string',
        editable: true,
        filter: false,
      },
      IOSCustom: {
        title: 'IOS Custom Price Range',
        type: 'string',
        editable: true,
        filter: false,
      },
    },
  };
  selectedLocation = 'Product 1';
  showLocation;
  dataLocation= [
    {name: 'Product 1'},
    {name: 'Product 1'},
    {name: 'Product 1'},
    {name: 'Product 1'},
    {name: 'Product 1'}
  ];

  source: LocalDataSource = new LocalDataSource();
  public tabledata: any

  //map
  latlong: any = {};
  mapData: any[];
  max = -Infinity;
  min = Infinity;
  options: any;

  bubbleTheme: any;
  geoColors: any[];
  themeSubscription: any;


  @Input() title;
  @Input() showMap;
  @Input() chartsValue;
  @Input() data;
  pieData;
  @Input() legend;
  @Input() chartsInput;


  constructor(private service: SmartTableService, public dataservice: DataService, private theme: NbThemeService) {
    const data = this.service.getData();
    this.source.load(data);


  }

  clickLocation(item){
    this.pieData = null;
    this.selectedLocation = item;
    setTimeout(() => {
      this.pieData = this.data[item];
      setTimeout(() => {

        document.getElementById('echartpick').click();
      }, 100)
    }, 100)

    this.showLocation = false;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
    this.getDataFromJson();
    if(this.showMap){
      this.charts.push( {
        type: 'Map',
        icon: 'fa-map',
        show: true,
        label: 'Display gradient map',
      });

      this.select(this.charts[this.charts.length - 1]);
    }
    if(this.chartsInput){

    console.log(this.data, this.chartsInput)
    this.pieData = this.data[this.chartsInput[0]];
    this.dataLocation = this.chartsInput;
    this.selectedLocation = this.chartsInput[0];
    }
    for(let item of this.chartsValue){
      console.log(item)
      if(item === 'Line'){
        this.charts.push({
          type: 'Line',
          icon: 'fa-line-chart',
          show: true,
          label: 'Display line chart',
        });
      }
      if(item === 'Table'){
        this.charts.push(   {
          type: 'Table',
          icon: 'fa-table',
          show: false,
          label: 'Display table',
        });
      }
      if(item === 'Bar'){
        this.charts.push({
          type: 'Bar',
          icon: 'fa-bar-chart',
          show: false,
          label: 'Display bar chart',
        });
      }
      if(item === 'eBar'){
        this.charts.push({
          type: 'eBar',
          icon: 'fa-bar-chart',
          show: false,
          label: 'Display bar chart',
        });
      }
      if(item === 'ePie'){
        this.charts.push({
          type: 'ePie',
          icon: 'fa-pie-chart',
          show: true,
          label: 'Display bar chart',
        });
      }
      // {
      //   type: 'Pie',
      //     icon: 'fa-pie-chart',
      //   show: true,
      //   label: 'Display pie chart',
      // },



      // {
      //   type: 'Histogram',
      //     icon: 'fa-bar-chart',
      //   show: false,
      //   label: 'Display Histogram chart',
      // },
    }
  }
  getDataFromJson() {
    this.dataservice.getData().subscribe((data) => {
        this.tabledata = data.data;
      });

  }
  changeonddl(): void {
  }

  // getPieData(){
  //   console.log(this.data)
  //
  //     [
  //     { value: 335, name: 'Germany' },
  //       { value: 310, name: 'France' },
  //       { value: 234, name: 'Canada' },
  //       { value: 135, name: 'Russia' },
  //       { value: 1548, name: 'USA' },
  //     ]
  // }
}

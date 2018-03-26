import { Component } from '@angular/core';
import {DataService} from "../../../@core/data/getcountrydata.service";
import {SmartTableService} from "../../../@core/data/smart-table.service";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'ngx-chartjs',
  styleUrls: ['./chartjs.component.scss'],
  templateUrl: './chartjs.component.html',
})
export class ChartjsComponent {
  showSelectItems;
  charts = [
    {
      type: 'Area',
      icon: 'fa-area-chart',
      show: true,
      label: 'Display simple area chart',
    },
    {
      type: 'Pie',
      icon: 'fa-pie-chart',
      show: false,
      label: 'Display simple pie chart',

    },
    {
      type: 'Line',
      icon: 'fa-line-chart',
      show: false,
      label: 'Display simple line chart',

    },
    {
      type: 'Bar',
      icon: 'fa-bar-chart',
      show: false,
      label: 'Display simple bar chart',

    },
    {
      type: 'Table',
      icon: 'fa-table',
      show: false,
      label: 'Display simple table',

    },

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

  source: LocalDataSource = new LocalDataSource();
  public tabledata: any
  constructor(private service: SmartTableService, public dataservice: DataService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
    this.getDataFromJson()
  }
  getDataFromJson() {
    this.dataservice.getData()
      .subscribe((data) => { this.tabledata
        this.tabledata = data.data;
      });

  }
  changeonddl(): void {
  }
}

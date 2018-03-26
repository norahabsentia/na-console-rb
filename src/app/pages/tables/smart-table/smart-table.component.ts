
@Component({
  selector: 'button-view',
  template: `
    <button (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}


import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocalDataSource, ViewCell} from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { DataService } from '../../../@core/data/getcountrydata.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
    .rightposition{
       float:right;
       margin:10px 0px;
    }
      .icon-setting{
        display:inline-block;
        padding: .375rem .75rem !important;
      }
      .dropdown, .dropup, .btn-group {
    margin-bottom: 1rem;
  }
  .setwidth{
    width: 25%;
  }
  .dropdownset{
    height: 200px;
    overflow: scroll;
    width: 25%;
  }

  nb-card-body {
   
  }
  `],
})
export class SmartTableComponent implements OnInit {

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
  ]


  settings = {
     hideSubHeader: false,
    actions: false,
   //   actions:
   //    {
   //      position: 'right',
   //      add : false,
   //    custom: [
   //      {
   //        name: '<i class="nb-loop" (click)="onClick()"></i>',
   //        title: '<i class="nb-loop" (click)="onClick()"></i>',
   //      },
   //    ],
   //   },
   // edit: {
   //    editButtonContent: '<i class="nb-edit"></i>',
   //    saveButtonContent: '<i class="nb-checkmark"></i>',
   //    cancelButtonContent: '<i class="nb-close"></i>',
   //  },
   //  delete: {
   //    deleteButtonContent: '<i class="nb-trash"></i>',
   //    confirmDelete: true,
   //  },
   //  reset: {
   //    reset: '<i class="nb-loop"></i>',
   //    },
    columns: {
      ProductID: {
        title: 'Product ID',
        type: 'number',
         editable: false,
         filter: false,
        },
      BasePrice: {
        title: 'Base Price',
        type: 'number',
         editable: false,
          filter: false,
      },
      RMin: {
        title: 'Min',
        type: 'number',
         editable: false,
          filter: false,
      },
      RMax: {
        title: 'Max',
        type: 'number',
         editable: false,
          filter: false,
      },
      CMin: {
        title: 'Min',
        type: 'number',
        editable: false,
         filter: false,
      },
      CMax: {
        title: 'Max',
        type: 'number',
        editable: true,
         filter: false,
      },
      button: {
        title: 'Actions',
        type: 'custom',
        editable: false,
        filter: false,
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            // this.showModal = true;

            alert(`${row.ProductID} saved!`)
          });
        }
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

  dataTCopy = [];
option = {};
  optionsBar;
 ngOnInit() {
   this.getDataFromJson();
  this.dataTCopy = Object.assign([], this.dataT);

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
   this.setData();
 }

  refresh(i){
   console.log(i, this.dataTCopy[i], this.dataT[i])
    // this.dataTCopy[i] = Object.assign({}, this.dataT[i]);
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

getDataFromJson() {
  this.dataservice.getData()
                   .subscribe((data) => { this.tabledata
                    this.tabledata = data.data;
                  });

}
    changeonddl(): void {
    }
  showModal;
  onClick(){
    console.log(2323)
  this.showModal = true;
  }

  dataBar1

  setData(){
    var dataPack1 = [];
    var dataPack2 = [];
    var dataPack3 = [];
    for(let i = 0; i < 12 ; i++){
      dataPack1.push(Math.floor(Math.random() * 60000) + 1  );
      dataPack2.push(Math.floor(Math.random() * 60000) + 1  );
      dataPack3.push(Math.floor(Math.random() * 60000) + 1  );
    }
    console.log(dataPack1, dataPack2)
    this.dataBar1 = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [
        {
          label: 'dataPack1',
          data: dataPack1,
          backgroundColor: "rgba(55, 160, 225, 0.7)",
          hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
          hoverBorderWidth: 2,
          hoverBorderColor: 'lightgrey'
        },
        // {
        //   label: 'dataPack2',
        //   data: dataPack2,
        //   backgroundColor: "rgba(225, 58, 55, 0.7)",
        //   hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
        //   hoverBorderWidth: 2,
        //   hoverBorderColor: 'lightgrey'
        // },
        // {
        //   label: 'dataPack3',
        //   data: dataPack3,
        //   backgroundColor: "rgba(55, 160, 0, 0.7)",
        //   hoverBackgroundColor: "rgba(55, 160, 0, 0.7)",
        //   hoverBorderWidth: 2,
        //   hoverBorderColor: 'lightgrey'
        // }
      ],
    };
  }

}

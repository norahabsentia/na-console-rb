import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {ButtonViewComponent} from "./smart-table/smart-table.component";
import {ChartModule} from "angular2-chartjs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {NgxEchartsModule} from "ngx-echarts";
import {ChartsRoutingModule} from "../charts/charts-routing.module";

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    ChartsRoutingModule, NgxEchartsModule, NgxChartsModule, ChartModule
  ],
  entryComponents: [ButtonViewComponent],
  exports: [ButtonViewComponent],
  declarations: [
    ButtonViewComponent,

    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }

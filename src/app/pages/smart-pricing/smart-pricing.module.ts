import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxEchartsModule} from "ngx-echarts";
import {routedComponents, SmartPricingRoutingModule} from "./smart-pricing-routing.module";
import {AgmCoreModule} from "@agm/core";
import {ThemeModule} from "../../@theme/theme.module";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

import {Ng2SmartTableModule} from "ng2-smart-table";
import {ChartsRoutingModule} from "../charts/charts-routing.module";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {ChartModule} from "angular2-chartjs";

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot(),
    LeafletModule.forRoot(),
    SmartPricingRoutingModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    ChartsRoutingModule, NgxChartsModule, ChartModule,

  ],
  exports: [],
  declarations: [

    ...routedComponents,

  ],
})
export class SmartPricingModule { }

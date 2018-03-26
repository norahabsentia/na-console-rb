import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SmartPricingComponent} from "./smart-pricing.component";
import {UserTrendsComponent} from "./user-trends/user-trends.component";
import {PerformanceAnalysisComponent} from "./performance-analysis/performance-analysis.component";
import {PredictionsComponent} from "./predictions/predictions.component";
import {ChartSwitcherSmartPriceComponent} from "./chart-switcher-smart-price/chart-switcher.component";
import {ChartjsBarSmartPricingComponent} from "./chart-switcher-smart-price/chartjs-bar-smart-pricing.component";
import {EchartsLineSmartPricingComponent} from "./chart-switcher-smart-price/echarts-line.component";
import {CountrySmartPricingComponent} from "./chart-switcher-smart-price/country/country.component";
import {EchartsBarSmartPriceComponent} from "./chart-switcher-smart-price/echarts-bar.component";
import {EchartsPieSmartPriceComponent} from "./chart-switcher-smart-price/echarts-pie.component";
import {RevenueRecommendationsAnalysisComponent} from "./revenue-recommendations-analysis/revenue-recommendations-analysis.component";

const routes: Routes = [{
  path: '',
  component: SmartPricingComponent,
  children: [{
    path: 'user-trends',
    component: UserTrendsComponent,
  }, {
    path: 'predictions',
    component: PredictionsComponent,
  }, {
    path: 'performance-analysis',
    component: PerformanceAnalysisComponent,
  },
    {
      path: 'Revenue-analysis',
      component: RevenueRecommendationsAnalysisComponent
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartPricingRoutingModule { }

export const routedComponents = [

  SmartPricingComponent,
  UserTrendsComponent,
  PredictionsComponent,
  PerformanceAnalysisComponent,
  ChartSwitcherSmartPriceComponent,
  ChartjsBarSmartPricingComponent,
  EchartsLineSmartPricingComponent,
  CountrySmartPricingComponent,
  EchartsBarSmartPriceComponent,
  EchartsPieSmartPriceComponent
];

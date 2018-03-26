import { NorahSchedulerModule } from './norah-scheduler/norah-scheduler.module';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {GameOverviewModule} from './game-overview/game-overview.module';
import { ChurnPredictionsComponent } from './churn-predictions/churn-predictions.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ChartModule} from "angular2-chartjs";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {NgxEchartsModule} from "ngx-echarts";
import {ChartsRoutingModule} from "./charts/charts-routing.module";
import {SwitcherComponent} from "./charts/chart-switcher/switcher/switcher.component";
import { PerformanceAnalysisOverviewComponent } from './retention-booster/user-churn/performance-analysis/performance-analysis-overview/performance-analysis-overview.component';
import { PerformanceAnalysisUserOriginBasisComponent } from './retention-booster/user-churn/performance-analysis/performance-analysis-user-origin-basis/performance-analysis-user-origin-basis.component';
import { PerformanceAnalysisUserBehaviorBasisComponent } from './retention-booster/user-churn/performance-analysis/performance-analysis-user-behavior-basis/performance-analysis-user-behavior-basis.component';
import {ChartSwitcherTableComponent} from "./charts/chart-switcher/chart-switcher-table/chart-switcher-table.component";
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule} from "angularfire2/auth";
import {RevenueRecommendationsAnalysisComponent} from "./smart-pricing/revenue-recommendations-analysis/revenue-recommendations-analysis.component";
import { DispatchCalendarComponent } from './retention-booster/dispatch-calendar/dispatch-calendar.component';
import {FullCalendarModule} from "ng-fullcalendar";
import { NotificationManagerComponent } from '../pages/notification-manager/notification-manager.component';
import { NotificationlistModule } from './notifications/notificationlist.module';

const PAGES_COMPONENTS = [
  PagesComponent,
  SwitcherComponent,


];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    GameOverviewModule,
    ChartsRoutingModule, NgxEchartsModule, NgxChartsModule, ChartModule,
    Ng2SmartTableModule,
    FullCalendarModule, 
    NorahSchedulerModule,
    NotificationlistModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ChurnPredictionsComponent,
    RevenueRecommendationsAnalysisComponent,
    LoginComponent,
    DispatchCalendarComponent,
    NotificationManagerComponent
  ],
})
export class PagesModule {
}

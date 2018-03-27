import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GameOverviewComponent} from './game-overview/game-overview.component';
import {ChurnPredictionsComponent} from "./churn-predictions/churn-predictions.component";
import {PerformanceAnalysisUserBehaviorBasisComponent} from "./retention-booster/user-churn/performance-analysis/performance-analysis-user-behavior-basis/performance-analysis-user-behavior-basis.component";
import {PerformanceAnalysisOverviewComponent} from "./retention-booster/user-churn/performance-analysis/performance-analysis-overview/performance-analysis-overview.component";
import {PerformanceAnalysisUserOriginBasisComponent} from "./retention-booster/user-churn/performance-analysis/performance-analysis-user-origin-basis/performance-analysis-user-origin-basis.component";
import {PerformanceAnalysisBoosterComponent} from "./retention-booster/performance-analysis.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "../auth.guard";
import {NotificationsPerformanceComponent} from "./retention-booster/notifications-performance/notifications-performance.component";
import {RevenueRecommendationsAnalysisComponent} from "./smart-pricing/revenue-recommendations-analysis/revenue-recommendations-analysis.component";
import {DispatchCalendarComponent} from "./retention-booster/dispatch-calendar/dispatch-calendar.component";
import { NotificationManagerComponent } from '../pages/notification-manager/notification-manager.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivate: [AuthGuard],
  children: [{
    path: 'dashboard',
    component: PerformanceAnalysisBoosterComponent,
  }, {
    path: 'filler-library',
    loadChildren: './filler-library/filler-library.module#FillerLibraryModule',
  },{
    path: 'norah-scheduler',
    loadChildren: './norah-scheduler/norah-scheduler.module#NorahSchedulerModule',
  },
  {
      path: 'notificationslist',
      loadChildren: './notifications/notificationlist.module#NotificationlistModule',
  },{
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
    canActivate: [AuthGuard]
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  },
  // {
  //   path: 'smart-pricing',
  //   loadChildren: './smart-pricing/smart-pricing.module#SmartPricingModule',
  // }
   {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  },
    {
      path: 'retention-booster/user-churn/performance-analysis/performance-analysis-user-behavior-basis',
      component: PerformanceAnalysisUserBehaviorBasisComponent,
    },
    {
      path: 'retention-booster/user-churn/performance-analysis/performance-analysis-overview',
      component: PerformanceAnalysisOverviewComponent,
    },
    {
      path: 'retention-booster/user-churn/performance-analysis/performance-analysis-user-origin-basis',
      component: PerformanceAnalysisUserOriginBasisComponent,
    },
    {
      path: 'retention-booster/churn-predictions',
      component: PerformanceAnalysisBoosterComponent,
    },
    {
      path: 'retention-booster/Notifications-Performance',
      component: NotificationsPerformanceComponent,
    },
    {
      path: 'notification-manager',
      component: NotificationManagerComponent,
    },
    {
      path: 'retention-booster/dispatch-calendar',
      component: DispatchCalendarComponent
    },
    {
    path: '',
    redirectTo: 'retention-booster/churn-predictions',
    pathMatch: 'full',
  }, {
    path: 'game-overview',
    component: GameOverviewComponent,
  }, {
    path: 'churn-predictions',
    component: ChurnPredictionsComponent,
  },{
    path: 'game-overview',
    pathMatch: 'full',
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

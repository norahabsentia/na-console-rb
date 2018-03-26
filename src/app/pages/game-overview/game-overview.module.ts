import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ChartModule} from 'angular2-chartjs';

import {ThemeModule} from '../../@theme/theme.module';
import {GameOverviewComponent} from './game-overview.component';
import {OverviewStatusCardComponent} from './overview-status-card/overview-status-card.component';
import {ClassificationComponent} from './classification-matrix/classification.component';
import {ClassificationDiagChartComponent} from './classification-diag-chart/classification-diag-chart.component';
import {AffluenceComponent} from './user-charts/affluence/affluence.component';
import {AppVersionComponent} from './user-charts/app-version/app-version.component';
import {CountryComponent} from './user-charts/country/country.component';
import {EngagementComponent} from './user-charts/engagement/engagement.component';
import {LastActionComponent} from './user-charts/last-action/last-action.component';
import {LevelStickinessComponent} from './user-charts/level-stickiness/level-stickiness.component';
import {LoyalityIndexComponent} from './user-charts/loyality-index/loyality-index.component';
import {MobileBrandComponent} from './user-charts/mobile-brand/mobile-brand.component';
import {OutOfLivesComponent} from './user-charts/out-of-lives/out-of-lives.component';
import {PlatformComponent} from './user-charts/platform/platform.component';
import {RegionComponent} from './user-charts/region/region.component';
import {SpentTimeComponent} from './user-charts/spent-time/spent-time.component';
import {UserSkillsComponent} from './user-charts/user-skills/user-skills.component';
import {CurrentLevelComponent} from './user-charts/current-level/current-level.component';
import {UserChartsComponent} from './charts/charts.component';
import {ChartsService} from './charts/charts.service';
import {ChartsTableComponent} from './charts/charts-table.component';
import {AgmCoreModule} from '@agm/core';
import {ChartsModule} from "../charts/charts.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ChartsRoutingModule} from "../charts/charts-routing.module";
import {EchartsLineComponent} from "../charts/echarts/echarts-line.component";
import {ChartjsBarComponent} from "../charts/chartjs/chartjs-bar.component";
import {EchartsBarComponent} from "../charts/echarts/echarts-bar.component";
import {EchartsPieComponent} from "../charts/echarts/echarts-pie.component";
import {ChartSwitcherComponent} from "../charts/chart-switcher/chart-switcher.component";
import {SwitcherComponent} from "../charts/chart-switcher/switcher/switcher.component";
import {PerformanceAnalysisOverviewComponent} from "../retention-booster/user-churn/performance-analysis/performance-analysis-overview/performance-analysis-overview.component";
import {PerformanceAnalysisUserOriginBasisComponent} from "../retention-booster/user-churn/performance-analysis/performance-analysis-user-origin-basis/performance-analysis-user-origin-basis.component";
import {PerformanceAnalysisUserBehaviorBasisComponent} from "../retention-booster/user-churn/performance-analysis/performance-analysis-user-behavior-basis/performance-analysis-user-behavior-basis.component";
import {PerformanceAnalysisBoosterComponent} from "../retention-booster/performance-analysis.component";
import {NotificationsPerformanceComponent} from "../retention-booster/notifications-performance/notifications-performance.component";
import {RevenueRecommendationsAnalysisComponent} from "../smart-pricing/revenue-recommendations-analysis/revenue-recommendations-analysis.component";

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    ChartsModule,
    Ng2SmartTableModule, ChartsRoutingModule,
    AgmCoreModule.forRoot(
      {
        apiKey: 'AIzaSyCA-qYd1msgbj8_-D29gANUA3RkLsWpv_U',
      }
    ),
  ],
  providers: [
    ChartsService,
  ],
  declarations: [
    PerformanceAnalysisBoosterComponent,
    PerformanceAnalysisOverviewComponent,
    PerformanceAnalysisUserOriginBasisComponent,
    PerformanceAnalysisUserBehaviorBasisComponent,
    NotificationsPerformanceComponent,
    GameOverviewComponent,
    OverviewStatusCardComponent,
    ClassificationComponent,
    ClassificationDiagChartComponent,
    UserChartsComponent,
    ChartsTableComponent,
    AffluenceComponent,
    AppVersionComponent,
    CountryComponent,
    CurrentLevelComponent,
    EngagementComponent,
    LastActionComponent,
    LevelStickinessComponent,
    LoyalityIndexComponent,
    MobileBrandComponent,
    OutOfLivesComponent,
    PlatformComponent,
    RegionComponent,
    SpentTimeComponent,
    UserSkillsComponent,
    CurrentLevelComponent,

    EchartsBarComponent,
    EchartsPieComponent,
    EchartsLineComponent,
    ChartjsBarComponent,
    ChartSwitcherComponent
  ],
  exports: []
})
export class GameOverviewModule {
}

import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

declare var d3;
declare var venn;

@Component({
  selector: 'ngx-classification-diag-chart',
  styleUrls: ['./classification-diag-chart.component.scss'],
  template: `
    <nb-card>
      <div class="col-sm-12 br-1">
        <div class="row p-3 bb-1">
          <div class="title">Classification Diagram</div>
        </div>
        <div class="row">
        <div id="venn"></div>
            <!--<ngx-charts-line-chart-->
      <!--[scheme]="colorScheme"-->
      <!--[results]="multi"-->
      <!--[xAxis]="showXAxis"-->
      <!--[yAxis]="showYAxis"-->
      <!--[legend]="showLegend"-->
      <!--[showXAxisLabel]="showXAxisLabel"-->
      <!--[showYAxisLabel]="showYAxisLabel"-->
      <!--[xAxisLabel]="xAxisLabel"-->
      <!--[yAxisLabel]="yAxisLabel">-->
    <!--</ngx-charts-line-chart>-->
          <!--<chart type="pie" [data]="data" [options]="options"></chart>-->
        </div>
      </div>
    </nb-card>
  `,
})
export class ClassificationDiagChartComponent implements OnDestroy, AfterViewInit {
  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 7300,
        },
        {
          name: '2011',
          value: 8940,
        },
      ],
    },
    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 7870,
        },
        {
          name: '2011',
          value: 8270,
        },
      ],
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 5002,
        },
        {
          name: '2011',
          value: 5800,
        },
      ],
    },
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  @Input() data;

  ngAfterViewInit(){
    // setTimeout(() => {
// define sets and set set intersections
      var sets = [ {label: 'Predicted Churn',sets: ['A'], size: this.data.predicted_churned + this.data.predicted_not_churned, style: 'color: #4aa3df', },
        {label: 'Observed Churn',sets: ['B'], size: this.data.predicted_churned + this.data.predicted_not_churned, color: '#a2a2a5', style: 'color: #dddde0'},
        {sets: ['A','B'], size: this.data.predicted_churned}];

      var chart = venn.VennDiagram().styled(false).width(500).height(300);;
      d3.select("#venn").datum(sets).call(chart);

    d3.selectAll("#inverted text").style("fill", "white");


    // }, 5000);
  }


  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

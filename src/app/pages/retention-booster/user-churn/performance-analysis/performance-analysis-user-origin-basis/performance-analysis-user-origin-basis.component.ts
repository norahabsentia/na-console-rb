import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'performance-analysis-user-origin-basis',
  templateUrl: './performance-analysis-user-origin-basis.component.html',
  styleUrls: ['./performance-analysis-user-origin-basis.component.scss']
})
export class PerformanceAnalysisUserOriginBasisComponent implements OnInit {

  relativeChartPath = '../../../json/nazara/retention_booster/predictions_analysis/user_origin/charts/';
  relativeTablePath = '../../../json/nazara/retention_booster/predictions_analysis/user_origin/tables/';
  relativeMapPath = '../../../json/nazara/retention_booster/predictions_analysis/user_origin/maps/';

  country;
  countryMapData;
  region;
  mobile;
  affluence;
  Platform;
  AppVersion;
  countryTable;
  regionTable;
  mobileTable;
  affluenceTable;
  PlatformTable;
  AppVersionTable;

  horizontalOptions = [
    {
      type: 'StackBarHorizontal',
      icon: 'fa-bar-chart',
      show: true,
      label: 'Display bar chart',
    },
    {
      type: 'Table',
      icon: 'fa-table',
      show: false,
      label: 'Display table',
    },
  ];

  horizontalOptions2 = [
    {
      type: 'StackBarHorizontal',
      icon: 'fa-bar-chart',
      show: true,
      label: 'Display bar chart',
    },
    {
      type: 'Table',
      icon: 'fa-table',
      show: false,
      label: 'Display table',
    },
  ]
  constructor(private http: HttpClient){

    this.http.get(this.relativeChartPath + 'country.json').subscribe((data: any) => {
      this.country = data.country;
      console.log(data.country)
    });
    this.http.get(this.relativeMapPath + 'map_predictions_analysis.json').subscribe((data: any) => {
      this.countryMapData = data.country;
      console.log("SAGAR MAP",this.countryMapData)
    });
    this.http.get(this.relativeChartPath + 'region.json').subscribe((data: any) => {
      this.region = data.region;
      console.log("11111",this.region)
    });
    this.http.get(this.relativeChartPath + 'mobile_brand_name.json').subscribe((data: any) => {
      this.mobile = data.mobile_brand_name;
      // console.log(data.Mobile)
    });
    this.http.get(this.relativeChartPath + 'affluence.json').subscribe((data: any) => {
      this.affluence = data.affluence;
      // console.log(data.Affluence)
    });
    this.http.get(this.relativeChartPath + 'paltform.json').subscribe((data: any) => {
      this.Platform = data.platform;
      // console.log(data.Platform)
    });
    this.http.get(this.relativeChartPath + 'app_version.json').subscribe((data: any) => {
      this.AppVersion = data.app_version;
      // console.log(data.Platform)
    });
    this.http.get(this.relativeTablePath + 'country.json').subscribe((data: any) => {
      this.countryTable = data.country;
      console.log("1111",this.countryTable)
    });
    this.http.get(this.relativeTablePath + 'region.json').subscribe((data: any) => {
      this.regionTable = data.region;
      // console.log(data.Region)
    });
    this.http.get(this.relativeTablePath + 'mobile_brand_name.json').subscribe((data: any) => {
      this.mobileTable = data.mobile_brand_name;
      // console.log(data.Mobile)
    });
    this.http.get(this.relativeTablePath + 'affluence.json').subscribe((data: any) => {
      this.affluenceTable = data.affluence;
      // console.log(data.Affluence)
    });
    this.http.get(this.relativeTablePath + 'paltform.json').subscribe((data: any) => {
      this.PlatformTable = data.platform;
      // console.log(data.Platform)
    });
    this.http.get(this.relativeTablePath + 'app_version.json').subscribe((data: any) => {
      this.AppVersionTable = data.app_version;
      // console.log(data.Platform)
    });

  }

  ngOnInit() {
  }

}

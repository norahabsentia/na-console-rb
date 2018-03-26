import {Component, OnInit} from '@angular/core';
import {NbColorHelper, NbThemeService} from '@nebular/theme';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ngx-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.scss'],
})
export class GameOverviewComponent implements OnInit {

  colors: any;
  chartjs: any;

  affluenceSeries: any;
  countrySeries: any;
  mobileBrandSeries: any;
  currentLevelSeries: any;
  currentLevelOptions: any;
  actionsSeries: any;
  actionsSeriesOptions: any;
  skillsSeries: any;
  skillsSeriesOptions: any;
  loyaltySeries: any;
  outOfLivesSeries: any;
  sticknessSeries: any;
  sticknessSeriesOptions: any;
  appVersionSeries: any;
  appVersionOptions: any;
  DISTRIBUTIONShow;
  OVERVIEWShow;
  ENGAGEMENTShow;
  country;
  region;
  mobile;
  affluence;
  currentlevel;
  lastAction;
  engagement;
  totalGame;
  userSkill;
  Out_of_Lives;
  LevelStickiness;
  Loyalty_Index;
  Platform;

  constructor(private http: HttpClient){
    this.http.get('../../../json/new_country-aggr-format.json').subscribe((data: any) => {
      this.country = data.country;
      console.log(data.country)
    });
    this.http.get('../../../json/new_region-aggr-format.json').subscribe((data: any) => {
      this.region = data.Region;
      console.log(data.Region)
    });
    this.http.get('../../../json/new_mobiles-aggr-format.json').subscribe((data: any) => {
      this.mobile = data.Mobile;
      console.log(data.Mobile)
    });
    this.http.get('../../../json/afluance-aggr-format.json').subscribe((data: any) => {
      this.affluence = data.Affluence;
      console.log(data.Affluence)
    });
    this.http.get('../../../json/new_currentlevel-aggr-format.json').subscribe((data: any) => {
      this.currentlevel = data.currentlevel;
      console.log(data.currentlevel)
    });
    this.http.get('../../../json/new_lastaction-aggr-format.json').subscribe((data: any) => {
      this.lastAction = data.LastAction;
      console.log(data.LastAction)
    });
    // this.http.get('../../../json/engagement-aggr-format.json').subscribe((data: any) => {
    //   this.engagement = data.Engagement;
    //   console.log(data.Engagement)
    // });
    // this.http.get('../../../json/Total_time_spent_in_Game-aggr-format.json').subscribe((data: any) => {
    //   this.totalGame = data.Total_time_spent_in_Game;
    //   console.log(data.Total_time_spent_in_Game)
    // });
    // this.http.get('../../../json/User_Skill-aggr-format.json').subscribe((data: any) => {
    //   this.userSkill = data.User_Skill;
    //   console.log(data.User_Skill)
    // });
    // this.http.get('../../../json/Out_of_Lives-aggr-format.json').subscribe((data: any) => {
    //   this.engagement = data.Engagement;
    //   console.log(data.Engagement)
    // });
    // this.http.get('../../../json/Level Stickiness-aggr-format.json').subscribe((data: any) => {
    //   this.LevelStickiness = data['Level Stickiness'];
    //   console.log(data['Level Stickiness'])
    // });
    // this.http.get('../../../json/Loyalty_Index-aggr-format.json').subscribe((data: any) => {
    //   this.Loyalty_Index = data.Loyalty_Index;
    //   console.log(data.Loyalty_Index)
    // });
    this.http.get('../../../json/platform-aggr-format.json').subscribe((data: any) => {
      this.Platform = data.Platform;
      console.log(data.Platform)
    });
  }

  ngOnInit(){

  }
}

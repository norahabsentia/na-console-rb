import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'performance-analysis-user-behavior-basis',
  templateUrl: './performance-analysis-user-behavior-basis.component.html',
  styleUrls: ['./performance-analysis-user-behavior-basis.component.scss']
})
export class PerformanceAnalysisUserBehaviorBasisComponent implements OnInit {


  relativeChartPath = '../../../json/nazara/retention_booster/predictions_analysis/user_behaviour/charts/';
  relativeTablePath = '../../../json/nazara/retention_booster/predictions_analysis/user_behaviour/tables/';

  currentlevelTable;
  lastActionTable;
  engagementTable;
  totalGameTable;
  userSkillTable;
  Out_of_LivesTable;
  LevelStickinessTable;
  Loyalty_IndexTable;



  currentlevel;
  lastAction;
  engagement;
  totalGame;
  userSkill;
  Out_of_Lives;
  LevelStickiness;
  Loyalty_Index;
  Platform;
  constructor(private http: HttpClient) {


    this.http.get(this.relativeChartPath + 'current_level.json').subscribe((data: any) => {
      this.currentlevel = data.current_level;
   //   console.log(data.currentlevel)
    });
    this.http.get(this.relativeChartPath + 'last_action.json').subscribe((data: any) => {
      this.lastAction = data.last_action;
     // console.log(data.LastAction)
    });
    this.http.get(this.relativeChartPath + 'engagement.json').subscribe((data: any) => {
      this.engagement = data.engagement;
      //console.log(data.Engagement)
    });
    this.http.get(this.relativeChartPath + 'total_time_spent.json').subscribe((data: any) => {
      this.totalGame = data.total_time_spent;
      //console.log(data.Total_time_spent_in_Game)
    });
    this.http.get(this.relativeChartPath + 'user_skill.json').subscribe((data: any) => {
      this.userSkill = data.user_skill;
      console.log("SAGAR",this.userSkill)
    });
    this.http.get(this.relativeChartPath + 'out_of_lives.json').subscribe((data: any) => {
      this.Out_of_Lives = data.out_of_lives;
      //console.log(data.Engagement)
    });
    this.http.get(this.relativeChartPath + 'level_stickiness.json').subscribe((data: any) => {
      this.LevelStickiness = data.stuck_at_a_level;
      //console.log(data['Level Stickiness'])
    });
    this.http.get(this.relativeChartPath + 'loyalty_index.json').subscribe((data: any) => {
      this.Loyalty_Index = data.loyalty_index;
      //console.log(data.Loyalty_Index)
    });
    this.http.get(this.relativeTablePath + 'current_level.json').subscribe((data: any) => {
      this.currentlevelTable = data.current_level;
      console.log("1111",this.currentlevelTable)
    });
    this.http.get(this.relativeTablePath + 'last_action.json').subscribe((data: any) => {
      this.lastActionTable = data.last_action;
      //console.log(data.LastAction)
    });
    this.http.get(this.relativeTablePath + 'engagement.json').subscribe((data: any) => {
      this.engagementTable = data.engagement;
      //console.log(data.Engagement)
    });
    this.http.get(this.relativeTablePath + 'total_time_spent.json').subscribe((data: any) => {
      this.totalGameTable = data.total_time_spent;
      //console.log(data.Total_time_spent_in_Game)
    });
    this.http.get(this.relativeTablePath + 'user_skill.json').subscribe((data: any) => {
      this.userSkillTable = data.user_skill;
      //console.log(data.skill)
    });
    this.http.get(this.relativeTablePath + 'out_of_lives.json').subscribe((data: any) => {
      this.Out_of_LivesTable = data.out_of_lives;
      //console.log(data.Engagement)
    });
    this.http.get(this.relativeTablePath + 'level_stickiness.json').subscribe((data: any) => {
      this.LevelStickinessTable = data.stuck_at_a_level;
      //console.log(data['Level Stickiness'])
    });
    this.http.get(this.relativeTablePath + 'loyalty_index.json').subscribe((data: any) => {
      this.Loyalty_IndexTable = data.loyalty_index;
      //console.log(data['Level Stickiness'])
    });




  }

  ngOnInit() {
  }

}

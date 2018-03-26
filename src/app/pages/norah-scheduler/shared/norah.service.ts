import { Injectable } from '@angular/core';
import { Norah} from './norah.model';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class NorahService {

  norahList: AngularFireList<any> ;
  selectedNorah: Norah = new Norah();
  temp: Norah = new Norah();
  norah_List_copy:any=[];

  scheduleArray = [];
  scheduleArray_temp : any = [];

  flag : boolean;


  scheduleTop_entry:string;
  scheduleTop_entry_temp:string;

  aaa=[{id:1,name:"High Loyalty"},
    {id:2,name:"Low Loyalty"},
    {id:3,name:"Low Engagement"},
    {id:4,name:"High Engagement"},
    {id:5,name:"Stuck at Level"},
    {id:6,name:"Low Progress"},
    {id:7,name:"High Progress"},
    {id:8,name:"High Spender"},
    {id:9,name:"Low Spender"},
    // {id:9,name:"Regular"}
  ]

  constructor(private firebase :AngularFireDatabase) {}
  getData(){
    this.norahList = this.firebase.list('Norah');
    return this.norahList;
  }

  saveData(){

    for(let i=0;i<this.scheduleArray.length;i++){
      // this.scheduleEntry.top_entry = this.scheduleArray[0].top_entry;
      let name = "com_studio_game"+(i+1);
      this.norahList.update(this.scheduleArray[i].norah_ID,
     {

      [name]:{

       top_entry:this.scheduleTop_entry,
       schedule:{
        customer:this.scheduleArray[i].customer,
        id:this.scheduleArray[i].id,
        week: this.scheduleArray[i].week,
        day:this.scheduleArray[i].day,
        },
        recommended_schedule:{
          customer:this.scheduleArray[i].customer,
          id:this.scheduleArray[i].id,
          week: this.scheduleArray[i].week,
          day:this.scheduleArray[i].day,
        }
        }
      });
    }
  }
//   saveData(){
//   for(let i = 0;i<this.aaa.length;i++){
//     let name = "com_studio_game"+(i+1);
//     this.norahList.push(
//       {
//         [name]:{
//           top_entry:1,
//         schedule:{
//                     customer:this.aaa[i].name,
//                     id:this.aaa[i].id,
//                     week: 1,
//                     day:1,
//                   },
//        recommended_schedule:{
//                     customer:this.aaa[i].name,
//                     id:this.aaa[i].id,
//                     week: 1,
//                     day:1,
//                    }

//               }
//       });
       
//   }
// }

  discard(){
    // this.scheduleArray=[];
    this.scheduleTop_entry = this.scheduleTop_entry_temp;
    for(let i = 0; i < this.scheduleArray_temp.length; i++){
      this.scheduleArray[i].customer = this.scheduleArray_temp[i].customer;
      this.scheduleArray[i].id = this.scheduleArray_temp[i].id;
      this.scheduleArray[i].week = this.scheduleArray_temp[i].week;
      this.scheduleArray[i].day = this.scheduleArray_temp[i].day;
    }
    // this.scheduleArray = this.scheduleArray_temp.slice(0);
  }

  resetData(){
    this.scheduleTop_entry ="1";
    for(let i=0;i<this.scheduleArray.length;i++){
      this.scheduleArray[i].customer = this.scheduleArray[i].customer;
      this.scheduleArray[i].id = this.scheduleArray[i].id;
      this.scheduleArray[i].week = 5;
      this.scheduleArray[i].day = 5;
      
    }
  }

  insertNotification(arr)
  {
    this.norahList.remove();
    for(let i = 0;i<arr.length;i++)   {
      this.norahList.push(arr[i]);
    } 
  }
  
}

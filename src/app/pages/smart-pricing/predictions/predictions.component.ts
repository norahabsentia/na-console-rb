import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {
  data1;
  pieData;
  legend = ['Buy', 'Not buy'];
  chartsInput;
  constructor(private http: HttpClient) {
    this.http.get('../../../json/smart-pricing/before_product_buy.json').subscribe((res: any) => {
      console.log(res.purchase_per_product)
      this.data1 = res.purchase_per_product;
      let pie = {};
      let chartsInput = [];
      for(let item of this.data1){
        chartsInput.push(item.value)
        pie[item.value] = [{ value: item.Buy, name: 'Buy' }, { value: item.Not_Buy, name: 'Not buy' }]
      }
      this.chartsInput = chartsInput;
      this.pieData = pie;
    });
    this.http.get('../../../json/smart-pricing/price-recommendations.json').subscribe((res: any) => {
      console.log(res)
      // this.data = res;
    });
    this.http.get('../../../json/smart-pricing/1date_revenue.json').subscribe((res: any) => {
      console.log(res)
      // this.data = res;
    });
  }

  ngOnInit() {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  data: any;
  dataTemp: any;
  
  constructor(public http: HttpClient) {
    this.data = [
      { 
        name:"academias",
        category: 1,
        items:[
          {
            id:1,
            title:"academia 1",
            tel:"+5511980872469",
            address:"Rua teste, etc",
            facebook:"facebook.com/caiomelzer",
            twitter:"twitter.com/caiomelzer",
            googleplus:"plus.com/caiomelzer",
            mail:"melzer.caio@gmail.com",
            whatsapp:"+5511980872469"
          },
          {
            id:2,
            title:"academia 2",
            tel:"+5511980872469",
            address:"Rua teste, etc",
            facebook:"facebook.com/caiomelzer",
            twitter:"twitter.com/caiomelzer",
            googleplus:"plus.com/caiomelzer",
            mail:"melzer.caio@gmail.com",
            whatsapp:"+5511980872469"
          }
        ]
      },
      { 
        name:"mercados",
        category: 2,
        items:[
          {
            id:3,
            title:"academia 1",
            tel:"+5511980872469",
            address:"Rua teste, etc",
            facebook:"teste",
            twitter:"caiomelzer"
          },
          {
            id:4,
            title:"academia 2",
            tel:"+5511980872469",
            address:"Rua teste, etc",
            facebook:"teste",
            twitter:"caiomelzer"
          }
        ]
      }
    ];
    this.dataTemp = this.data;
  }

  getGuiaData(filter){
    if(filter !== null){
      return this.dataTemp.find(function (obj) { return obj.category=== filter; }).items;
    }
    else{
       return this.dataTemp;
    }
  }
}

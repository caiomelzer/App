import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { GuiaDetalhePage } from '../../pages/guia-detalhe/guia-detalhe';
import { DataProvider } from '../../providers/data/data';


@Component({
  selector: 'page-guia',
  templateUrl: 'guia.html'
})
export class GuiaPage{

  searchQuery: string = '';
  btns: any;
  
  constructor(private http: HttpClient,navParams: NavParams,public navCtrl: NavController, public DataProvider: DataProvider){
    this.getAllPages(DataProvider.getGuiaData(null));
  }

  getAllPages(data) {
    this.btns = data;
  }

  getPage(btnTitle, btnId){
    this.navCtrl.push(GuiaDetalhePage, {category: btnId, title: btnTitle});
  }

  getBtns(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      var btns =  this.btns.filter(function(item){
        if(item.name.indexOf(val) > -1)
          return item.name;
      });
      this.btns = btns;
    }
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { GuiaDetalhePage } from '../../pages/guia-detalhe/guia-detalhe';


@Component({
  selector: 'page-guia',
  templateUrl: 'guia.html'
})
export class GuiaPage{

  searchQuery: string = '';
  btns: any;
  

  constructor(private http: HttpClient,navParams: NavParams,public navCtrl: NavController) {
    this.getAllPages();
 }

  getAllPages() {
    this.http.get('http://www.porteirinha.com.br/wp-json/wp/v2/categories?per_page=100&orderby=name&order=asc&parent=93').subscribe(data => {
      this.btns = data;
      console.log(this.btns);
    });
  }

  getPage(btnTitle, btnId){
    this.navCtrl.push(GuiaDetalhePage,{id: btnId, title: btnTitle});
  }

  getBtns(ev: any) {
    this.getAllPages();
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

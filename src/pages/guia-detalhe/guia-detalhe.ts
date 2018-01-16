import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the GuiaDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guia-detalhe',
  templateUrl: 'guia-detalhe.html',
})
export class GuiaDetalhePage {
  header: string;
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.header = this.navParams.get('title');
    this.http.get('http://www.porteirinha.com.br/wp-json/wp/v2/posts?parent='+this.navParams.get('id')+'&per_page=100&status=publish').subscribe(data => {
      this.items = data;
    });
    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuiaDetalhePage');
  }

}

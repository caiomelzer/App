import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { DataProvider } from '../../providers/data/data';
import { ActionSheetController } from 'ionic-angular';

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
  category: any;
  items: any;
  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public DataProvider: DataProvider) {
    this.header = this.navParams.get('title');
    this.category = this.navParams.get('category');
    this.items = DataProvider.getGuiaData(this.category);
    //console.log(this.navParams);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad GuiaDetalhePage');
  }

  showActionPhone(phone) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'O que deseja fazer?',
      buttons: [
        {
          text: 'Ligar',
          role: 'destructive',
          handler: () => {
          }
        },{
          text: 'Enviar mensagem',
          handler: () => {
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  share(tool, url){
  
  }

}

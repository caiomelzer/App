import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';


/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {
  dataform = {
    _wpcf7: 12607,
    _wpcf7_version : '4.9',
    _wpcf7_locale : 'en_US',
    _wpcf7_unit_tag : 'wpcf7-f12607-p12604-o1',
   _wpcf7_container_post : 12604
  };
    
  constructor(public toastCtrl: ToastController, private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    //Nada a declarar...
  }
  
  contatoForm(){
    this.dataform._wpcf7 = 12607; 
    this.dataform._wpcf7_version = '4.9';
    this.dataform._wpcf7_locale = 'en_US';
    this.dataform._wpcf7_unit_tag = 'wpcf7-f12607-p12604-o1';
    this.dataform._wpcf7_container_post = 12604;

    return new Promise((resolve, reject) => {
      this.http.post('http://www.porteirinha.com.br/wp-json/contact-form-7/v1/contact-forms/12607/feedback', this.dataform)
          .subscribe(res => {
            alert('Contato enviado com sucesso!');
          }, (err) => {
            alert('Ops, tente novamente!');
          });
      });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ContatoPage');
  }

}

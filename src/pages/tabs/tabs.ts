import { Component } from '@angular/core';

import { ContatoPage } from '../contato/contato';
import { AnunciePage } from '../anuncie/anuncie';
import { GuiaPage } from '../guia/guia';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabAnuncie = AnunciePage;
  tabContato = ContatoPage;
  tabGuia  = GuiaPage;


  constructor() {

  }
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuiaDetalhePage } from './guia-detalhe';

@NgModule({
  declarations: [
    GuiaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(GuiaDetalhePage),
  ],
})
export class GuiaDetalhePageModule {}

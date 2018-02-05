import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnunciePage } from './anuncie';

@NgModule({
  declarations: [
    AnunciePage,
  ],
  imports: [
    IonicPageModule.forChild(AnunciePage),
  ],
})
export class AnunciePageModule {}

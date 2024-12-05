import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainP_Barra_ISPageRoutingModule } from './main-p_Barra_IS-routing.module';

import { MainP_Barra_ISPage } from './main-p_Barra_IS.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainP_Barra_ISPageRoutingModule,
    SharedModule
  ],
  declarations: [MainP_Barra_ISPage]
})
export class MainP_Barra_ISPageModule {}

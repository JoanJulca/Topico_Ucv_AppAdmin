import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportesGeneral_ISPageRoutingModule } from './reportesGeneral_IS-routing.module';

import { ReportesGeneral_ISPage } from './reportesGeneral_IS.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportesGeneral_ISPageRoutingModule,
    SharedModule
  ],
  declarations: [ReportesGeneral_ISPage]
})
export class ReportesGeneral_ISPageModule {}

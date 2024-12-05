import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordDoctor_ISPageRoutingModule } from './forgot-passwordDoctor_IS-routing.module';

import { ForgotPasswordDoctor_ISPage } from './forgot-passwordDoctor_IS.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordDoctor_ISPageRoutingModule,
    SharedModule
  ],
  declarations: [ForgotPasswordDoctor_ISPage]
})
export class ForgotPasswordDoctor_ISPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeDoctor_ISPageRoutingModule } from './welcomeDoctor_IS-routing.module';

import { WelcomeDoctor_ISPage } from './welcomeDoctor_IS.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeDoctor_ISPageRoutingModule
  ],
  declarations: [WelcomeDoctor_ISPage]
})
export class WelcomeDoctor_ISPageModule {}

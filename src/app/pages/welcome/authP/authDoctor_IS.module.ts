import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthDoctor_ISPageRoutingModule } from './authDoctor_IS-routing.module';
import { AuthDoctor_ISPage } from './authDoctor_IS.page';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthDoctor_ISPageRoutingModule,
    SharedModule
  ],
  declarations: [AuthDoctor_ISPage]
})
export class AuthDoctor_ISPageModule {}

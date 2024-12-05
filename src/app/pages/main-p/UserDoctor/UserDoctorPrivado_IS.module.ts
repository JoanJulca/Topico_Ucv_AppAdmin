import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDoctorPrivado_ISPage } from './UserDoctorPrivado_IS.page';
import { UserDoctorPrivado_ISPageRoutingModule } from './UserDoctorPrivado_IS-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDoctorPrivado_ISPageRoutingModule,
    SharedModule
  ],
  declarations: [UserDoctorPrivado_ISPage]
})
export class UserDoctorPrivado_ISPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserUsuarioPrivado_ISPageRoutingModule } from './UserUsuarioPrivado_IS-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserUsuarioPrivado_ISPage } from './UserUsuarioPrivado_IS.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserUsuarioPrivado_ISPageRoutingModule,
    SharedModule
  ],
  declarations: [UserUsuarioPrivado_ISPage]
})
export class UserUsuarioPrivado_ISPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDoctorPrivado_ISPage } from './UserDoctorPrivado_IS.page';

const routes: Routes = [
  {
    path: '',
    component: UserDoctorPrivado_ISPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDoctorPrivado_ISPageRoutingModule {}

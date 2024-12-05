import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserUsuarioPrivado_ISPage } from './UserUsuarioPrivado_IS.page';

const routes: Routes = [
  {
    path: '',
    component: UserUsuarioPrivado_ISPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserUsuarioPrivado_ISPageRoutingModule {}

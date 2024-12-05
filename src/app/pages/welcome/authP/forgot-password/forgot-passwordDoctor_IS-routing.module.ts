import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordDoctor_ISPage } from './forgot-passwordDoctor_IS.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordDoctor_ISPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordDoctor_ISPageRoutingModule {}

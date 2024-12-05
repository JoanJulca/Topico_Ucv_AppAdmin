import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthDoctor_ISPage } from './authDoctor_IS.page';

const routes: Routes = [
  {
    path: '',
    component: AuthDoctor_ISPage
  },

  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-passwordDoctor_IS.module').then( m => m.ForgotPasswordDoctor_ISPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthDoctor_ISPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeDoctor_ISPage } from './welcomeDoctor_IS.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeDoctor_ISPage
  },
  {
    path: 'authP',
    loadChildren: () => import('./authP/authDoctor_IS.module').then( m => m.AuthDoctor_ISPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeDoctor_ISPageRoutingModule {}

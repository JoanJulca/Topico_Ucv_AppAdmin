import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },

  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcomeDoctor_IS.module').then( m => m.WelcomeDoctor_ISPageModule)
  },

  {
    path: 'main-p',
    loadChildren: () => import('./pages/main-p/main-p_Barra_IS.module').then( m => m.MainP_Barra_ISPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainP_Barra_ISPage } from './main-p_Barra_IS.page';

const routes: Routes = [
  {
    path: '',
    component: MainP_Barra_ISPage,
    children: [

  {
    path: 'UserUsuario',loadChildren: () => import('./UserUsuario/UserUsuarioPrivado_IS.module').then( m => m.UserUsuarioPrivado_ISPageModule)
  },
  {
    path: 'UserDoctor',loadChildren: () => import('./UserDoctor/UserDoctorPrivado_IS.module').then( m => m.UserDoctorPrivado_ISPageModule)
  },
  {
    path: 'reportes',loadChildren: () => import('./reportes/reportesGeneral_IS.module').then( m => m.ReportesGeneral_ISPageModule)
  },


  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainP_Barra_ISPageRoutingModule {}

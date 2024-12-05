import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportesGeneral_ISPage } from './reportesGeneral_IS.page';

const routes: Routes = [
  {
    path: '',
    component: ReportesGeneral_ISPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesGeneral_ISPageRoutingModule {}

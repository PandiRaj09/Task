import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolinfoPage } from './schoolinfo.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolinfoPageRoutingModule {}

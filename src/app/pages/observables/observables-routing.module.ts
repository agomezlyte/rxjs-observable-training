import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesPage } from './observables.page';

const routes: Routes = [
  {
    path: '',
    component: ObservablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservablesPageRoutingModule {}

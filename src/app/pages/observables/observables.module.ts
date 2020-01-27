import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservablesPageRoutingModule } from './observables-routing.module';

import { ObservablesPage } from './observables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservablesPageRoutingModule
  ],
  declarations: [ObservablesPage]
})
export class ObservablesPageModule {}

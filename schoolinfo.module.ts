import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolinfoPageRoutingModule } from './schoolinfo-routing.module';

import { SchoolinfoPage } from './schoolinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolinfoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SchoolinfoPage]
})
export class SchoolinfoPageModule {}

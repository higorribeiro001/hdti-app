import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesTiRoutingModule } from './services-ti-routing.module';
import { ServicesTiComponent } from './services-ti/services-ti.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ServicesTiComponent
  ],
  imports: [
    CommonModule,
    ServicesTiRoutingModule,
    MatSort,
    MatSortModule,
    MatTableModule,
    MatIconModule
  ]
})
export class ServicesTiModule { }

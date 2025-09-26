import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesTiComponent } from './services-ti/services-ti.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesTiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesTiRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
        pathMatch: 'full',
        data: { title: 'Principal', subtitle: 'Lista de demandas' }
      },
      {
        path: 'solicitacoes',
        loadChildren: () => import('../request/request.module').then(m => m.RequestModule),
        pathMatch: 'full',
        data: { title: 'Solicitações', subtitle: 'Lista de solicitações' }
      },
      {
        path: 'servicos',
        loadChildren: () => import('../services-ti/services-ti.module').then(m => m.ServicesTiModule),
        pathMatch: 'full',
        data: { title: 'Serviços', subtitle: 'Demandas finalizadas' }
      },
      {
        path: 'perfil',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),
        pathMatch: 'full',
        data: { title: 'Perfil', subtitle: 'Seu perfil pessoal' }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }

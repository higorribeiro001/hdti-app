import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
      CommonModule,
      TemplateRoutingModule,
      MatSidenavModule,
      MatIconModule,
      MatTooltipModule
  ]
})
export class TemplateModule { }

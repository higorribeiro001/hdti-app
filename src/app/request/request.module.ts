import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request/request.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RequestComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class RequestModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRequestRoutingModule } from './form-request-routing.module';
import { FormRequestComponent } from './form-request/form-request.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    FormRequestComponent
  ],
  imports: [
    CommonModule,
    FormRequestRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class FormRequestModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { routing } from './auth-routing.module';
import { SharedModule } from '../../components/shared/shared.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }

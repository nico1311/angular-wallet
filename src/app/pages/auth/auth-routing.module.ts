import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/auth/login' }
]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

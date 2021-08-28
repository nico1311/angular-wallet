import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
  ],
  imports: [
    // @angular/material
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserLayoutComponent } from './user-layout.component';

import { UserRoutingModule } from './user.routing.module';




@NgModule({
  declarations: [
    UserComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }

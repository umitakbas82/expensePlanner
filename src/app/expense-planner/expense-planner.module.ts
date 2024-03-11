import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensePlannerRoutingModule } from './expense-planner-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ExpensePlannerRoutingModule
  ]
})
export class ExpensePlannerModule { }

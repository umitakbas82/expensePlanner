import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'expxense-planner',loadChildren:()=>import("./expense-planner/expense-planner.module").then(x=>x.ExpensePlannerModule)}
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

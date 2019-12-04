import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayEmployeesComponent } from './display-employees.component';


const routes: Routes = [
  {
    path:'',
    component:DisplayEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayEmployeesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)
  },
  {
    path:'add-employee',
    loadChildren:()=>import('./add-employee/add-employee.module').then(x=>x.AddEmployeeModule)
  },
  {
    path:'display-employees',
    loadChildren:()=>import('./display-employees/display-employees.module').then(x=>x.DisplyEmployeesModule),
    canActivate:[AuthGuard]
  },
  {
    path:'update-employee',
    loadChildren:()=>import('./update-employee/update-employee.module').then(x=>x.UpdateEmployeeModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

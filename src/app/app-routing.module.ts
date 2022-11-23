import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { FirstformComponent } from './firstform/firstform.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    component:EmployeesComponent,
    path:'employees'
  },
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:ListComponent,
    path:'list'
  },
  {
    component:FirstformComponent,
    path:'firstform'
  },
  {
    component:DashboardComponent,
    path:'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
  
}

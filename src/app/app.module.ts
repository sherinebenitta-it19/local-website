import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { EmployeesComponent } from './employees/employees.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { FirstformComponent } from './firstform/firstform.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ 
    AppComponent,
    EmployeesComponent,
    ListComponent,
    HomeComponent,
    FirstformComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

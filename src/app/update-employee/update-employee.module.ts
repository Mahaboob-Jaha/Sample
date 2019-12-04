import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpdateEmployeeComponent } from './update-employee.component';
import { UpdateEmployeeRoutingModule } from './update-employee.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    UpdateEmployeeComponent
  ],
  imports: [
    UpdateEmployeeRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class UpdateEmployeeModule { }

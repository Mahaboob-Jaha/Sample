import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AddEmployeeComponent } from './add-employee.component';
import { AddEmployeeRoutingModule } from './add-employee.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        AddEmployeeComponent
    ],
    imports: [
        AddEmployeeRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class AddEmployeeModule { }

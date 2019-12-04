import { NgModule } from '@angular/core';
import { DisplayEmployeesComponent } from './display-employees.component';
import { DisplayEmployeesRoutingModule } from './display-employees.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule} from 'ngx-pagination';
import { FnamePipe } from './fname.pipe';
import { LnamePipe } from './lname.pipe'
import { HttpErrorInterceptor } from '../app.interceptor';


@NgModule({
  declarations: [
    DisplayEmployeesComponent,
    FnamePipe,
    LnamePipe
  ],
  imports: [
   DisplayEmployeesRoutingModule,
   HttpClientModule,
   CommonModule, //loaded instead of BrowserModule to access ngIF, ngFor directives
   NgxPaginationModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpErrorInterceptor,multi:true}],
  bootstrap: []
})
export class DisplyEmployeesModule { }

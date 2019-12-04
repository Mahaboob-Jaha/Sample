import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { longStackSupport } from 'q';
import { DisplayService } from './display.service';
@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {

  constructor(private appService: AppService,private display:DisplayService ,private router: Router, private ngxService: NgxUiLoaderService) { }
  employees = [];
  p = 1;
  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s

    // this.display.getAll().subscribe(data=>{},error=>{
    //   console.log(error);
    // })
    
    this.appService.getEmployees().subscribe(
      (list: any) => {
        if (list) {
          this.employees = list;
          this.ngxService.stop();
        }
      },
      error=>{
        console.log(error);
      })
  }

  editRow(id) {
    localStorage.setItem("empId", id);
    //console.log(id);
    this.router.navigate(['/update-employee/update'], { queryParams: { jaha: id } });
  }

  deleteRow(id) {
    //alert("hi");
    this.ngxService.start();
    this.appService.deleteEmp(id).subscribe((data: any) => {
      this.appService.getEmployees().subscribe((list: any) => {
        this.ngxService.stop();
        alert("successfully deleted");
      })
    })


  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private appService: AppService, private router: Router, private ngxService: NgxUiLoaderService, private route: ActivatedRoute) { }
  employee_form: FormGroup;
  submitted: boolean;
  ngOnInit() {
    this.createForm();
    this.getEmployee();
  }

  createForm() {
    this.employee_form = new FormGroup({
      'id': new FormControl(null, [Validators.required]),
      'employee_name': new FormControl(null, [Validators.required]),
      'employee_salary': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{1,}')]),
      'employee_age': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{1,}'), Validators.min(1), Validators.max(100)])
    })
  }

  getEmployee() {
    //alert("hi")
    //console.log(localStorage.getItem("empId"));
    /**Getting value from query parameters */
    let id;
    this.route.queryParams.subscribe(data => {
      console.log(data);
      if(data.jaha){
        id=data.jaha
      }
      else{
        this.router.navigate(['/display-employees'])
      }
    })

    /** getting value from Routing parameters */
    //let id;
    // this.route.params.subscribe(data => {
    //   if(data.id){
    //     id=data.id;
    //   }
    //   else{
    //     this.router.navigate(['/display-employees'])
    //   }
    // })
    this.ngxService.start();
    this.appService.getEmpById(id).subscribe((data: any) => {
      //console.log(data);
      if (data) {
        this.ngxService.stop();
        this.employee_form.controls['id'].setValue(data.id);
        this.employee_form.controls['employee_name'].setValue(data.employee_name);
        this.employee_form.controls['employee_salary'].setValue(data.employee_salary);
        this.employee_form.controls['employee_age'].setValue(data.employee_age);
      }
    })
  }
  updateRow() {
    this.ngxService.start();
    if (this.employee_form.valid) {
      let employee = {
        name: this.employee_form.controls['employee_name'].value,
        salary: this.employee_form.controls['employee_salary'].value,
        age: this.employee_form.controls['employee_age'].value
      };
      this.appService.updateEmp(localStorage.getItem("empId"), employee).subscribe((data: any) => {
        if (data) {
          this.ngxService.stop();
          this.router.navigate(['/display-employees']);
        }
      })

    }
    else {
      this.submitted = true;
    }
  }
}

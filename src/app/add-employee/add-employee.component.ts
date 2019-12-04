import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private appService: AppService, private router: Router, private ngxService:NgxUiLoaderService) { }
  employee_form: FormGroup;
  submitted: boolean;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.employee_form = new FormGroup({
      'employee_name': new FormControl(null, [Validators.required]),
      'employee_salary': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{1,}')]),
      'employee_age': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{1,}'),Validators.min(1),Validators.max(100)])
    })
  }

  addRow() {
    //alert("hello");
    this.ngxService.start();
    console.log(this.employee_form);
    if (this.employee_form.valid) {
      let employee = {
        name: this.employee_form.controls['employee_name'].value,
        salary: this.employee_form.controls['employee_salary'].value,
        age: this.employee_form.controls['employee_age'].value
      };
         
      this.appService.addEmployee(employee).subscribe((data: any) => {
        if(data){
          this.ngxService.stop();
          this.router.navigate(['/display-employees'])
        }
        // 
        //console.log(data);
      })
    }
    else {
      this.submitted = true;
    }
  }


}

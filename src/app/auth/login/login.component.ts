import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService, private router: Router, private ngxService:NgxUiLoaderService) { }
  login: FormGroup
  errorMsg;
  ngOnInit() {
    this.createLogin();
  }

  createLogin() {
    this.login = new FormGroup({
      'id': new FormControl(null),
      'name': new FormControl(null, [Validators.required])
    });
  }

  loginEmp() {
    if (this.login.valid) {
      this.ngxService.start();
      this.appService.getEmployees().subscribe((data: any) => {
        if (data) {
          for (let i = 0; i < data.length; i++) {
            if (this.login.controls['id'].value == data[i].id) {
              if (this.login.controls['name'].value == data[i].employee_name) {
                this.ngxService.stop();
                localStorage.setItem("user",data[i]);
                this.router.navigate(['\display-employees']);
              }
              else {
                this.ngxService.stop();
                this.errorMsg = "Please enter valid1 credentials";
                setTimeout(() => {
                  this.errorMsg = "";
                  this.login.controls['id'].reset();
                  this.login.controls['name'].reset();
                }, 2000)
              }
              break;
            }
            else {
              this.ngxService.stop();
              this.errorMsg = "Please enter valid2 credentials";
              setTimeout(() => {
                this.errorMsg = "";
                this.login.controls['id'].reset();
                this.login.controls['name'].reset();
              }, 2000)
            }
          }
        }
      })
    }
  }

}

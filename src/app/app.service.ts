import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  public getEmployees() {
    return this.http.get(environment.EMPLOYEES_API + "employ");
  }

  public addEmployee(obj) {
    return this.http.post(environment.EMPLOYEES_API + "create", obj);
  }

  public getEmpById(id) {
    return this.http.get(environment.EMPLOYEES_API + "employee/" + id)
  }

  public updateEmp(id, obj) {
    return this.http.put(environment.EMPLOYEES_API + "update/" + id, obj);
  }

  public deleteEmp(id) {
    return this.http.delete(environment.EMPLOYEES_API + "delete/" + id);
  }

  public getAll(){
    return this.http.get("kkdnfjfncjfnvjfn").pipe(retry(1),catchError(this.handleError))
  }

  /**method for handle Http errors */
  handleError(err) {

    // let errorMessage = '';
    // if (err.error instanceof ErrorEvent) {
    //   /**Client side error */
    //   errorMessage = "Error:" + err.error.message;
    // }
    // else {
    //   //alert("djndjfcj");
    //   /**Server side error */
    //   errorMessage = "Error:" + err.error.message;
    // }
    // alert(errorMessage);
    return throwError("hello");
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {retry,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http:HttpClient) { }
  public getAll(){
    return this.http.get("djfhdjffb").pipe(retry(1),catchError(this.handleError))
  }

  handleError(error){
    return throwError("Hello pk")
  }

}

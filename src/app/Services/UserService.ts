import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UserList } from '../CustomModels/UserViewModel';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  // Define API
  apiURL = 'https://reqres.in';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

   
  getUserList(): Observable<UserList> {
    return this.http.get<UserList>(this.apiURL + '/api/users?page=1')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  getUserDetails(id: number): Observable<UserList> {
    return this.http.get<UserList>(this.apiURL + '/api/users/'+ id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  // HttpClient API delete() method => Delete user
  deleteUser(userId: number){
    return this.http.delete<UserList>(this.apiURL + '/api/users/' + userId, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
 
  // Error handling 
  handleError(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
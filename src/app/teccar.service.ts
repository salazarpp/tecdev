import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeccarService {

  getCarsUrl = 'http://localhost:4000/cars';
  setUsersUrl = 'http://localhost:4000/users';

  constructor(
    private http: HttpClient
  ) { }

  getCars(): Observable<any> {
    return this.http.get<any>(this.getCarsUrl);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>((this.setUsersUrl), user)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  errorHandl(error: any): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error;
    }
    return throwError(errorMessage);
  }
}

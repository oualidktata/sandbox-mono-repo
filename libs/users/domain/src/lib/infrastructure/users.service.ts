import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../entities/user.model';
import { UserSearchCriteria } from '../entities/userSearchCriteria.model';
import { catchError, filter, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  //private apiUrl = 'http://localhost:5000/Users';
  private apiUrl = './assets/users.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    //const params = new HttpParams().set('active', criteria.active);
    const headers= new HttpHeaders().append('Accept','application/json');
    //headers.append('authorize','token..')
    //should use this with Real API
    return this.http.get<User[]>(this.apiUrl,{headers:headers }).pipe(
      map((users: User[]) => {
        return users.filter((u) => u.active == true);//but let's filter manually for now
      }),
      catchError(error=>{
        return throwError(`problem getting users-${error}!`)
      })
    );
}
getUsersByCriteria(criteria: UserSearchCriteria): Observable<User[]> {
  const params = new HttpParams().set('active', criteria.active);
  const headers= new HttpHeaders().append('Accept','application/json');
  //headers.append('authorize','token..')
  //should use this with Real API
  return this.http.get<User[]>(this.apiUrl,{params: params,headers:headers }).pipe(
    map((users: User[]) => {
      return users.filter((u) => u.active == criteria.active);//but let's filter manually for now
    }),
    catchError(error=>{
      return throwError(`problem getting users-${error}!`)
    })
  );
}

  deleteUser(User: User): Observable<User> {
    const url = `${this.apiUrl}/${User.id}`;
    return this.http.delete<User>(url);
  }

  updateUserReminder(User: User): Observable<User> {
    const url = `${this.apiUrl}/${User.id}`;
    return this.http.put<User>(url, User, httpOptions);
  }

  addUser(User: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, User, httpOptions);
  }
}

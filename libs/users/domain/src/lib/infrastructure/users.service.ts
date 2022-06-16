import { Inject, Injectable, Optional } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../entities/user.model';
import { UserSearchCriteria } from '../entities/userSearchCriteria.model';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { ConfigurationService, IConfiguration } from '@pwc/user-console-assets/configuration';
import { IUsersConfig, UsersLibraryConfiguration } from '@pwc/users/configuration';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private config!:IUsersConfig;

  constructor(@Optional() public configService:ConfigurationService,private http: HttpClient) {
    this.configService.settings$.asObservable().subscribe(settings=> {
      this.config=(settings as UsersLibraryConfiguration).usersConfig;
    });
  }
  getUsers(): Observable<User[]> {
    //const params = new HttpParams().set('active', criteria.active);
    const headers= new HttpHeaders().append('Accept','application/json');
    //headers.append('authorize','token..')
    //should use this with Real API

    return this.http.get<User[]>(this.config.baseUri,{headers:headers }).pipe(
      tap(data=>console.log(this.config.baseUri)),
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
  //console.log(`****getUsersByCriteria${JSON.stringify(this.config.usersConfig.baseUri)}`)
  return this.http.get<User[]>(this.config.baseUri,{params: params,headers:headers }).pipe(
    tap(data=>console.log(this.config.baseUri)),
    map((users: User[]) => {
      return users.filter((u) => u.active == criteria.active);//but let's filter manually for now
    }),
    catchError(error=>{
      return throwError(`problem getting users-${error}!`)
    })
  );
}

  deleteUser(User: User): Observable<User> {
    const url = `${this.config.baseUri}/${User.id}`;
    return this.http.delete<User>(url);
  }

  updateUserReminder(User: User): Observable<User> {
    const url = `${this.config.baseUri}/${User.id}`;
    return this.http.put<User>(url, User, httpOptions);
  }

  addUser(User: User): Observable<User> {
    return this.http.post<User>(this.config.baseUri, User, httpOptions);
  }
}

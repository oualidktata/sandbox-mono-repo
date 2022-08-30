import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../entities/user.model';
import { UserSearchCriteria } from '../entities/userSearchCriteria.model';
import { catchError, map, tap, shareReplay } from 'rxjs/operators';
import { ConfigurationService } from '@pwc/user-console-assets/configuration';
import { UsersBCConfig } from '../configuration/users-bc.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private config!: UsersBCConfig;

  constructor(
    @Optional() public configService: ConfigurationService,
    private http: HttpClient
  ) {
    this.configService.settings$.subscribe((settings) => {
      this.config = settings as UsersBCConfig;
      console.log(`UserService-${JSON.stringify(this.config)}`);
    });
  }
  //   getUsers(): Observable<User[]> {
  //     //const params = new HttpParams().set('active', criteria.active);
  //     const headers= new HttpHeaders().append('Accept','application/json');
  //     //headers.append('authorize','token..')
  //     //should use this with Real API

  //     return this.http.get<User[]>(this.config.baseUri,{headers:headers }).pipe(
  //       tap(data=>console.log(this.config.baseUri)),
  //       map((users: User[]) => {
  //         return users.filter((u) => u.active == true);//but let's filter manually for now
  //       }),
  //       shareReplay(),
  //       catchError(error=>{
  //         return throwError(`problem getting users-${error}!`)
  //       })
  //     );
  // }
  getUsersByCriteria(criteria: UserSearchCriteria): Observable<User[]> {
    const params = new HttpParams().set('active', criteria.active);
    const headers = new HttpHeaders().append('Accept', 'application/json');
    //headers.append('authorize','token..')
    //should use this with Real API
    //console.log(`****getUsersByCriteria${JSON.stringify(this.config.usersConfig.baseUri)}`)
    return this.http
      .get<User[]>(this.config.usersConfig.baseUri, { params: params, headers: headers })
      .pipe(
        tap((data) => console.log(this.config.usersConfig.baseUri)),
        map((users: User[]) => {
          return users.filter((u) => u.active == criteria.active); //but let's filter manually for now
        }),
        shareReplay(),
        catchError((error) => {
          return throwError(`problem getting users-${error}!`);
        })
      );
  }

  deleteUser(User: User): Observable<User> {
    const url = `${this.config.usersConfig.baseUri}/${User.id}`;
    return this.http.delete<User>(url);
  }

  updateUserReminder(User: User): Observable<User> {
    const url = `${this.config.usersConfig.baseUri}/${User.id}`;
    return this.http.put<User>(url, User, httpOptions);
  }

  addUser(User: User): Observable<User> {
    return this.http.post<User>(this.config.usersConfig.baseUri, User, httpOptions);
  }
}

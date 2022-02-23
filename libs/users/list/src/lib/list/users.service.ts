import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@pwc/users/domain';

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
    return this.http.get<User[]>(this.apiUrl);
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

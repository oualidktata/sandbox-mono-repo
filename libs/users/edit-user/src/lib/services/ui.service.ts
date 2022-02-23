import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddUser= false;
  private subject = new Subject<boolean>();

  toggleAddTask(): void {
    this.showAddUser = !this.showAddUser;
    this.subject.next(this.showAddUser);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}

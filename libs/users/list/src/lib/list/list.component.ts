import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { User } from '@pwc/users/domain';
import { ListDataSource, ListItem } from './list-datasource';
import { UserService } from './users.service';

@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements AfterViewInit,OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListItem>;
  dataSource: ListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  users: User[] = [];
  constructor(private userService: UserService) {
    this.dataSource = new ListDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  deleteuser(user: User) {
    this.userService
      .deleteUser(user)
      .subscribe(
        () => (this.users = this.users.filter((u) => u.id !== user.id))
      );
  }

  toggleReminder(user: User) {
    user.active = !user.active;
    this.userService.updateUserReminder(user).subscribe();
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe((user) => this.users.push(user));
  }
}

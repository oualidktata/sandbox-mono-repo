import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User, UsersFacade } from '@pwc/users/domain';

@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, AfterViewInit {
  @Input() users?: User[] | null = [];
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  dataSource!: MatTableDataSource<User>;
  selection = new SelectionModel<User>();
  currentFilter = this.listFacade.currentFilter$;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'createdOn', 'active'];
  //users: User[] = [];
  constructor(private listFacade: UsersFacade) {}
  ngOnInit(): void {
    if (this.users?.length) {
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      // = this.dataSource;
      console.log(`list.ngOnInit=>Sort=${this.sort}`);
    }
    console.log(`list.ngOnInit.users.Length=${this.users?.length}`);
  }

  ngAfterViewInit(): void {
    if (this.users?.length) {
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.currentFilter.subscribe((p) => {
        this.dataSource.filter = p;
        console.log(`currentFilter.subscribe=${p}`);
      });
      //this.dataSource = new ListDataSource(this.users);
      // = this.dataSource;
      console.log(`list.ngOnChanges=>Length=${this.users.length}`);
    }
    console.log(`list.ngAfterViewInit.users.Length=${this.users?.length}`);
  }
  // ngOnChanges(): void {
  //   if (this.users?.length) {
  //     this.dataSource.sort = this.sort;
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource = new ListDataSource(this.users);
  //     // = this.dataSource;
  //     console.log(`list.ngOnChanges=>Length=${this.users.length}`);
  //   }
  // }
  onItemToggled(user: User) {
    this.listFacade.selectUser(user);
    //console.log(`Selected User${this.selection.selected}`);
  }
  // ngOnInit(): void {
  //   //this.users=this.listFacade.users$.subscribe()
  //   // if (this.users) {
  //   //   this.dataSource = new ListDataSource(this.users);
  //   // }
  //   //this.listFacade.getUsers().subscribe((users) => (this.users = users));
  // }
}

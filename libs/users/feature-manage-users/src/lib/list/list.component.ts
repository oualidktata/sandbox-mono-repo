import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { EventEmitter, NgModule, Output } from '@angular/core';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SharedMaterialModule } from '@pwc/shared/material';
import { User, UsersFacade } from '@pwc/users/domain';

@Component({
  selector: 'pwc-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnChanges {
  @Input() users?: User[] = [];
  @Input() filter?:string|null='';
  @Output() selected= new EventEmitter<User>();
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  dataSource!: MatTableDataSource<User>;
  selection = new SelectionModel<User>();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'lastName', 'createdOn', 'active'];
  //users: User[] = [];
  constructor() {}
  ngOnChanges(): void {
    if (this.users?.length) {
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter = this.filter as string;
    }
    console.log(`list.ngOnInit.users.Length=${this.users?.length}`);
  }

  ngAfterViewInit(): void {
    if (this.users?.length) {
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      // this.usersFacade.criteria$.subscribe((p) => {
       this.dataSource.filter = this.filter as string;
      //   console.log(`currentFilter.subscribe=${p}`);
      // });
      //this.dataSource = new ListDataSource(this.users);
      // = this.dataSource;
      console.log(`list.ngOnChanges=>Length=${this.users.length}`);
    }
    console.log(`list.ngAfterViewInit.users.Length=${this.users?.length}`);
  }
  onItemToggled(user: User) {
    this.selected.emit(user);
    //console.log(`Selected User${this.selection.selected}`);
  }
}

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  exports: [ListComponent],
  declarations: [ListComponent],
  providers: [],
})
export class UsersListModule {}

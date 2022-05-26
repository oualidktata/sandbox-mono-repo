import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { SharedMaterialModule } from '@pwc/shared/material';
import { User } from '@pwc/users/domain';

@Component({
  selector: 'pwc-users-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewComponent {
  _users?:User[]=[]
  _tags=['After markets','Admin','PWC','Manager'];
  @Input()
  get users():User[]{
    console.log(`Getter:Users from View ${this._users?.length}`)
    return this._users!;}
  set users(value:User[]){
     this._users=value.map((item) => ({...item,tags:this._tags}));
    console.log(`Setter:Users from View ${this._users.length}`)
  };
  @Input() filter?:string|null='';
  @Output() selected= new EventEmitter<User>();


  onItemToggled(user: User) {
    this.selected.emit(user);
    //console.log(`Selected User${this.selection.selected}`);
  }
}

@NgModule({
  imports: [SharedMaterialModule,CommonModule],
  exports: [ListViewComponent],
  declarations: [ListViewComponent],
  providers: [],
})
export class ListViewModule {

}


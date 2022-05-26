import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '@pwc/shared/material';
import { UserSearchCriteria, UsersFacade } from '@pwc/users/domain';
import { combineLatest, merge, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pwc-search-user',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  constructor(private usersFacade: UsersFacade) {}
  bus$:Observable<string[]>=of(["IT", "Customer service","Enterprise Architect"]);
  //criteria$:Observable<UserSearchCriteria>=this.usersFacade.userSearchCriteria$;
combinedCriteria$=combineLatest([this.usersFacade.clientSideFilter$,
   this.usersFacade.serverSideCriteria$]).
   pipe(map(([clientFilters,serverCriteria])=>({clientFilters,serverCriteria})));
   
updateFilter(filter: any): void {
    this.usersFacade.updateFilter(filter.target.value);
    console.log(`ManageUsersComponent.updateFilter ${filter.target.value}`);
  }
  updateActive(active:boolean):void{
    this.usersFacade.updateActive(active);
  }
}

@NgModule({
  imports: [CommonModule,FormsModule,SharedMaterialModule,ReactiveFormsModule],
  exports: [SearchComponent],
  declarations: [SearchComponent],
  providers: [],
})
export class SearchUsersModule {}

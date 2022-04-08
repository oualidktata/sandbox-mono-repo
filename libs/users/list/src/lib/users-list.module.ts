import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedMaterialModule } from '@pwc/shared/material';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class UsersListModule {}

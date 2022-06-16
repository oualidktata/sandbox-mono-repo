import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserModule } from './add-user/add-user.component';

@NgModule({
  imports: [CommonModule,AddUserModule],
  exports:[AddUserModule]
})
export class FeatureEditUserModule {}

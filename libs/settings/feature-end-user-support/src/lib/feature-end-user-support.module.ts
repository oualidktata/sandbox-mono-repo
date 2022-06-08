import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditEndUserSupportModule } from './edit-end-user-support/edit-end-user-support.component';
import { ViewEndUserSupportModule } from './view-end-user-support/view-end-user-support.component';

@NgModule({
  imports: [CommonModule,EditEndUserSupportModule,ViewEndUserSupportModule],
  declarations: [],
  exports: [EditEndUserSupportModule,ViewEndUserSupportModule],
})
export class FeatureEndUserSupportModule {}

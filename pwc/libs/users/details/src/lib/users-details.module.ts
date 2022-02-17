import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { SharedMaterialModule } from '@pwc/shared/material';

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [DetailsComponent],
})
export class UsersDetailsModule {}

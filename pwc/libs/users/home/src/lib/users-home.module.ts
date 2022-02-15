import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedMaterialModule } from '@pwc/shared/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedMaterialModule],
})
export class UsersHomeModule {}

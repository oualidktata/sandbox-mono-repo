import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, SharedMaterialModule, RouterModule],
  exports: [NavComponent],
})
export class SharedLayoutModule {}

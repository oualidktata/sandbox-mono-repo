import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavComponent, PageNotFoundComponent],
  imports: [CommonModule, SharedMaterialModule, RouterModule],
  exports: [NavComponent, PageNotFoundComponent],
})
export class SharedLayoutModule {}

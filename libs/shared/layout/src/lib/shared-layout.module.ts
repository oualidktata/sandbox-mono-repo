import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicComponent } from './classic/classic.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [ClassicComponent, PageNotFoundComponent],
  imports: [CommonModule, SharedMaterialModule, RouterModule],
  exports: [ClassicComponent, PageNotFoundComponent],
})
export class SharedLayoutModule {}

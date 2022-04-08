import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '@pwc/shared/material';
import { CrudFormCardComponent } from './crud-form-card.component';

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [CrudFormCardComponent],
  exports: [CrudFormCardComponent],
})
export class CrudFormCardModule {}

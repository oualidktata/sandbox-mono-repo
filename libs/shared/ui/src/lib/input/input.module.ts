import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '@pwc/shared/material';
import { InputComponent } from './input.component';

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputModule {}

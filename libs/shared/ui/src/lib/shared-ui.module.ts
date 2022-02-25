import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import { CrudFormCardComponent } from './crud-form-card/crud-form-card.component';

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [DashboardTileComponent, CrudFormCardComponent],
  exports: [DashboardTileComponent, CrudFormCardComponent],
})
export class SharedUiModule {}

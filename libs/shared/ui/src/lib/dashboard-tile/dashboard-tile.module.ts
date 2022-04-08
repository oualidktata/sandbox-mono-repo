import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '@pwc/shared/material';
import { DashboardTileComponent } from './dashboard-tile.component';

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [DashboardTileComponent],
  exports: [DashboardTileComponent],
})
export class DashboardTileModule {}

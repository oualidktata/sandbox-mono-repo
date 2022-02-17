import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { SharedMaterialModule } from '@pwc/shared/material';

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [DashboardTileComponent],
  exports: [DashboardTileComponent],
})
export class SharedUiModule {}

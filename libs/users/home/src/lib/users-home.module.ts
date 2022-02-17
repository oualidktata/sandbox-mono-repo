import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import { TotalsTileComponent } from './totals-tile/totals-tile.component';
import { SharedUiModule } from '@pwc/shared/ui';
import { ForcastTileComponent } from './forcast-tile/forcast-tile.component';

@NgModule({
  declarations: [HomeComponent, TotalsTileComponent, ForcastTileComponent],
  imports: [CommonModule, SharedMaterialModule, SharedUiModule],
})
export class UsersHomeModule {}

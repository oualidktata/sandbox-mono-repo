import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import { TotalsTileComponent } from './totals-tile/totals-tile.component';
import { DashboardTileModule } from '@pwc/shared/ui';
import { ForcastTileComponent } from './forcast-tile/forcast-tile.component';
import { UsersDetailsModule } from '@pwc/users/details';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [DashboardComponent, TotalsTileComponent, ForcastTileComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    DashboardTileModule,
    UsersDetailsModule,
    RouterModule.forChild(routes),
  ],
  exports: [DashboardComponent],
})
export class UsersDashboardModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CrudFormCardModule, DashboardTileModule, QuantitySelectorModule } from '@pwc/shared/ui';
import { OrganizationSettingComponent } from './organization-setting/organization-setting.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'manage', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'manage' },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardTileModule,
    QuantitySelectorModule,
    CrudFormCardModule,
    SharedMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, OrganizationSettingComponent],
  exports: [HomeComponent],
})
export class ManageSettingsModule {}

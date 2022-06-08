import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellUsersComponent } from './shell-users.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import { FeatureManageUsersModule } from '@pwc/users/feature-manage-users';
import { FeatureManageRolesModule } from '@pwc/users/feature-manage-roles';
import { FeatureDashboardModule } from '@pwc/users/feature-dashboard';
import { FeatureManageSettingsModule } from '@pwc/settings/feature-manage-settings';
const routes: Routes = [
  {
    path: '',
    component: ShellUsersComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'home',
        pathMatch: 'full',
        loadChildren: () =>
          import('@pwc/users/feature-manage-users').then(
            (m) => m.FeatureManageUsersModule
          ),
      },

      {
        path: 'settings',
        pathMatch: 'full',
        loadChildren: () =>
          import('@pwc/settings/feature-manage-settings').then(
            (m) => m.FeatureManageSettingsModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FeatureManageUsersModule,
    FeatureManageRolesModule,
    FeatureDashboardModule,
    FeatureManageSettingsModule,
    SharedMaterialModule,
  ],
  exports: [RouterModule],
  declarations: [ShellUsersComponent],
})
export class ShellUsersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellUsersComponent } from './shell-users.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import {FeatureManageUsersModule} from '@pwc/users/feature-manage-users';
import { FeatureManageRolesModule } from '@pwc/users/feature-manage-roles';
import { FeatureDashboardModule } from '@pwc/users/feature-dashboard';
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
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: () =>
          import('@pwc/users/feature-dashboard').then(
            (m) => m.FeatureDashboardModule
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
    SharedMaterialModule
  ],
  exports: [RouterModule],
  declarations: [ShellUsersComponent],
})
export class ShellUsersModule {}

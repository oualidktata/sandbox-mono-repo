import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellSettingsComponent } from './shell-settings/shell-settings.component';
import { ManageSettingsModule } from '@pwc/settings/manage-settings';
import { SharedMaterialModule } from '@pwc/shared/material';

const routes: Routes = [
  {
    path: '',
    component: ShellSettingsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('@pwc/settings/manage-settings').then(
            (m) => m.ManageSettingsModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ManageSettingsModule,
    SharedMaterialModule,
  ],
  declarations: [ShellSettingsComponent],
  exports: [ShellSettingsComponent],
})
export class ShellSettingsModule {}

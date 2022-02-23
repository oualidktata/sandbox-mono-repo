import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellSettingsComponent } from './shell-settings/shell-settings.component';
import { ManageSettingsModule } from '@pwc/settings/manage-settings';
import { SharedMaterialModule } from '@pwc/shared/material';
import { SharedUiModule } from '@pwc/shared/ui';
import { SharedLayoutModule } from '@pwc/shared/layout';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@pwc/settings/manage-settings').then(
        (m) => m.ManageSettingsModule
      ),
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ManageSettingsModule,SharedMaterialModule,SharedUiModule,SharedLayoutModule],
  declarations: [ShellSettingsComponent],
  exports: [ShellSettingsComponent],
})
export class ShellSettingsModule {}

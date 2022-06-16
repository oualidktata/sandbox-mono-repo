import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellSettingsComponent } from './shell-settings/shell-settings.component';
import { SharedMaterialModule } from '@pwc/shared/material';
import { HomeModule } from '@pwc/settings/feature-manage-settings';
const routes: Routes = [
  {
    path: '',
    component: ShellSettingsComponent,
    children: [
      {
        path: 'home',
        pathMatch: 'full',
        loadChildren: () =>
          import('@pwc/settings/feature-manage-settings').then(
            (m) => m.HomeModule
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),
     SharedMaterialModule,
     HomeModule],
  declarations: [ShellSettingsComponent],
  exports: [ShellSettingsComponent],
})
export class ShellSettingsModule {}

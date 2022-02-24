import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@pwc/shared/layout';
const routes: Routes = [
  { path: 'manage', pathMatch: 'full', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'manage' },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class ManageSettingsModule {}

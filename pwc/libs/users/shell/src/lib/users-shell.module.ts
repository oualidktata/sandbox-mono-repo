import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import { HomeComponent, UsersHomeModule } from '@pwc/users/home';
import { SharedMaterialModule } from '@pwc/shared/material';
import { DetailsComponent, UsersDetailsModule } from '@pwc/users/details';
import { ListComponent, UsersListModule } from '@pwc/users/list';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  {
    path: 'list',
    component: ListComponent,
    //outlet: 'list',
  },
  {
    path: 'details',
    component: DetailsComponent,
    outlet: 'details',
  },
  { path: '', pathMatch: 'full', redirectTo: '/users/home' }, //TODO:not convinced that's the best way to do it, I would prefer not knowing about users given in app
];
@NgModule({
  imports: [
    CommonModule,
    UsersHomeModule,
    UsersDetailsModule,
    UsersListModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
  ],
  exports: [RouterModule],
  declarations: [ShellComponent],
})
export class UsersShellModule {}

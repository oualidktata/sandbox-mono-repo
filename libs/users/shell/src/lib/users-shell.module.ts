import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import { UsersDashboardModule } from '@pwc/users/dashboard';
import { SharedMaterialModule } from '@pwc/shared/material';
import { PageNotFoundComponent, SharedLayoutModule } from '@pwc/shared/layout';
import { ManageUsersModule } from '@pwc/users/manage-users';
const routes: Routes = [
  {
    path: 'users',
    component: ShellComponent,
    pathMatch: 'full',
    // loadChildren: () =>
    //   import('@pwc/users/dashboard').then((m) => m.UsersDashboardModule),
    // children: [
    //   { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    //   {
    //     path: 'dashboard',
    //     loadChildren: () =>
    //       import('@pwc/users/dashboard').then((m) => m.UsersDashboardModule),
    //     //outlet: 'list',
    //   },
    //   {
    //     path: 'manage-users',
    //     loadChildren: () =>
    //       import('@pwc/users/manage-users').then((m) => m.ManageUsersModule),
    //     //outlet: 'list',
    //   },
    // ],
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },

  //   loadChildren: () =>
  //     import('@pwc/users/shell').then((m) => m.UsersShellModule),
  //   // children: [{ path: 'dashboard', component: dashboardComponent }],
  // },
  // { path: '', redirectTo: 'users/dashboard', pathMatch: 'full' },
];

//   {
//     path: 'details',
//     component: DetailsComponent,
//     outlet: 'details',
//   },
// const routes: Routes = [

//   { path: '', pathMatch: 'full', redirectTo: '/users/dashboard' }, //TODO:not convinced that's the best way to do it, I would prefer not knowing about users given in app
// ];
@NgModule({
  imports: [
    CommonModule,
    UsersDashboardModule,
    SharedLayoutModule,
    UsersDashboardModule,
    ManageUsersModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
  ],
  exports: [RouterModule],
  declarations: [ShellComponent],
})
export class UsersShellModule {}

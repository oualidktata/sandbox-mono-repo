import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import { HomeComponent, UsersHomeModule } from '@pwc/users/home';
import { SharedMaterialModule } from '@pwc/shared/material';
import { UsersDetailsModule } from '@pwc/users/details';
import { ListComponent, UsersListModule } from '@pwc/users/list';
import { PageNotFoundComponent, SharedLayoutModule } from '@pwc/shared/layout';

const routeConfig = { enableTracing: false };
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        component: HomeComponent,
        //outlet: 'list',
      },
      {
        path: 'list',
        component: ListComponent,
        //outlet: 'list',
      },
    ],
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },

  //   loadChildren: () =>
  //     import('@pwc/users/shell').then((m) => m.UsersShellModule),
  //   // children: [{ path: 'home', component: HomeComponent }],
  // },
  // { path: '', redirectTo: 'users/home', pathMatch: 'full' },
];

//   {
//     path: 'details',
//     component: DetailsComponent,
//     outlet: 'details',
//   },
// const routes: Routes = [

//   { path: '', pathMatch: 'full', redirectTo: '/users/home' }, //TODO:not convinced that's the best way to do it, I would prefer not knowing about users given in app
// ];
@NgModule({
  imports: [
    CommonModule,
    UsersHomeModule,
    UsersDetailsModule,
    UsersListModule,
    SharedLayoutModule,
    RouterModule.forRoot(routes, routeConfig),
    SharedMaterialModule,
  ],
  exports: [RouterModule],
  declarations: [ShellComponent],
})
export class UsersShellModule {}

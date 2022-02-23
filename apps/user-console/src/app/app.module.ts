import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersShellModule } from '@pwc/users/shell';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedLayoutModule, ClassicComponent } from '@pwc/shared/layout';
import { SharedMaterialModule } from '@pwc/shared/material';
const routeConfig = { enableTracing: true };
const routes: Routes = [
  {
    path: '',
    component: ClassicComponent,
    children: [
      //users
      {
        path: 'users',
        //component: UsersShellModule,
        loadChildren: () =>
          import('@pwc/users/shell').then((m) => m.UsersShellModule),
      },
      //settings
      {
        path: 'settings',
        //component: UsersShellModule,
        loadChildren: () =>
          import('@pwc/settings/shell-settings').then(
            (m) => m.ShellSettingsModule
          ),
      },
    ],
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UsersShellModule,
    BrowserAnimationsModule,
    SharedLayoutModule,
    SharedMaterialModule,
    RouterModule.forRoot(routes, routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedLayoutModule } from '@pwc/shared/layout';
import { SharedMaterialModule } from '@pwc/shared/material';
import { HttpClientModule } from '@angular/common/http';
const routeConfig = { enableTracing: false };
const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () =>
      import('@pwc/settings/shell').then((m) => m.ShellSettingsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@pwc/users/shell').then((m) => m.ShellUsersModule),
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedLayoutModule,
    SharedMaterialModule,
    RouterModule.forRoot(routes, routeConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedLayoutModule } from '@pwc/shared/layout';
import { SharedMaterialModule } from '@pwc/shared/material';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationModule, ConfigurationService } from '@pwc/user-console-assets/configuration';
import { environment } from '../environments/environment.dev';
import { AppConfig } from '../assets/config/app.config.development';
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
    ConfigurationModule.forRoot({config:new AppConfig()}),
    HttpClientModule
  ],
  providers: [ConfigurationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

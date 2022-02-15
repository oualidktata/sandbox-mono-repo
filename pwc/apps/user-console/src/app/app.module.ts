import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { UsersShellModule, ShellComponent } from '@pwc/users/shell';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedLayoutModule } from '@pwc/shared/layout';
import { SharedMaterialModule } from '@pwc/shared/material';
//import { SharedMaterialModule } from '@pwc/shared/material';

const routeConfig = { enableTracing: true };
const routes: Routes = [
  {
    path: 'users',
    component: ShellComponent,
    loadChildren: () =>
      import('@pwc/users/shell').then((m) => m.UsersShellModule),
    // children: [{ path: 'home', component: HomeComponent }],
  },
  { path: '', redirectTo: 'users/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, routeConfig),
    UsersShellModule,
    SharedLayoutModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

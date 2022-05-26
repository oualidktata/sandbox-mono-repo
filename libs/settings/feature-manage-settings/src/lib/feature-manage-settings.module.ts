import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.component';

@NgModule({
  imports: [
    HomeModule
  ],
  declarations: [],
  exports: [HomeModule],
})
export class FeatureManageSettingsModule {}

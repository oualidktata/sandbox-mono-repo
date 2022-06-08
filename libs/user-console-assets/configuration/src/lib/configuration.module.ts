import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationContext } from './configuration-context';

@NgModule({
  imports: [CommonModule],
  providers: [],
})
export class ConfigurationModule {
  static forRoot(context: ConfigurationContext):ModuleWithProviders<ConfigurationModule> {
    console.log(`forRoot${context.config.applicationName}`)
    return {
      ngModule: ConfigurationModule,
      providers: [
        {
          provide: ConfigurationContext,
          useValue: context,
        },
      ],
    };
  }
}

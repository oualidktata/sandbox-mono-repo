import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationContext } from './configuration-context';

@NgModule({
  imports: [CommonModule],
  providers: [],
})
export class ConfigurationModule {
  static forRoot(
    context: ConfigurationContext
  ): ModuleWithProviders<ConfigurationModule> {
    console.log(
      `ConfigurationModule.forRoot$-${JSON.stringify(context.config)}`
    );
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

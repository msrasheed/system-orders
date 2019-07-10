import { Injector } from '@angular/core';

export class OrderModuleInjector {
  private static injector: Injector;

  static setInjector(injector: Injector) {
    OrderModuleInjector.injector = injector;
  }

  static getInjector(): Injector {
    return OrderModuleInjector.injector;
  }
}

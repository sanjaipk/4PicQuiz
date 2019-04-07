import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// import { NoopinterceptorService } from './noopinterceptor.service';
import { ContantsService } from './contants.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ContantsService//,
    // NoopinterceptorService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new  Error('you shall not run!');
    }
  }
 }

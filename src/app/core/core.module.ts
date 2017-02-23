import {NgModule, Optional, SkipSelf}     from '@angular/core';
import {CommonModule}                     from '@angular/common';
import {FormsModule}                      from '@angular/forms';
import {Http}                             from '@angular/http';
import {RouterModule}                     from '@angular/router';
import {TranslateModule, TranslateLoader} from 'ng2-translate';
import {TranslateLoaderFactory}           from '../app.translate.factory';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {LoggerService}        from './logger.service';

import {NavComponent}    from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {EasterEggService} from '../shared/easter-egg.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateLoaderFactory,
      deps: [Http]
    }),
  ],
  exports: [
    NavComponent,
    FooterComponent
  ],
  declarations: [
    NavComponent,
    FooterComponent
  ],
  providers: [
    LoggerService,
    EasterEggService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

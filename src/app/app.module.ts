import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {TranslateModule, TranslateLoader} from 'ng2-translate';
import {TranslateLoaderFactory} from './app.translate.factory';

import {APP_CONFIG, AppConfig} from './config/app.config';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';

import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home/home-page.component';
import {ZoomquiltPageComponent} from './pages/zoomquilt/zoomquilt-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateLoaderFactory,
      deps: [Http]
    }),
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent,

    HomePageComponent,
    ZoomquiltPageComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

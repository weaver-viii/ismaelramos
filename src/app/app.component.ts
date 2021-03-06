import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ir-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  private translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.translateService.getBrowserLang());
  }
}

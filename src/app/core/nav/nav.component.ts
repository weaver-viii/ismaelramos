import {Component} from '@angular/core';
import {TranslateService}         from 'ng2-translate';

@Component({
  selector: 'ir-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  private translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}

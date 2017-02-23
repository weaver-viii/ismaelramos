import {Component, AfterViewInit}     from '@angular/core';
import {TranslateService}             from 'ng2-translate';

declare let $;

@Component({
  selector: 'ir-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements AfterViewInit {

  private translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  ngAfterViewInit() {
    $('#logo').textillate({initialDelay: 250, in: {effect: 'bounceInLeft'}});
    $('#languages span').textillate({initialDelay: 500, in: {effect: 'bounceInRight'}});
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}

import {Component, AfterViewInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {EasterEggService} from '../../shared/easter-egg.service';

declare let $;

@Component({
  selector: 'ir-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements AfterViewInit {

  private translateService: TranslateService;
  eggsCounter: number;

  constructor(private easterEggService: EasterEggService,
              translateService: TranslateService) {
    this.translateService = translateService;

    this.eggsCounter = this.easterEggService.getCounter();

    this.easterEggService.refreshCounter$.subscribe(
      counter => this.refreshCounter(counter));
  }

  ngAfterViewInit() {
    $('#logo').textillate({initialDelay: 250, in: {effect: 'bounceInLeft'}});
    $('#languages span').textillate({initialDelay: 500, in: {effect: 'bounceInRight'}});
  }

  refreshCounter(counter): void {
    this.eggsCounter = counter;
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}

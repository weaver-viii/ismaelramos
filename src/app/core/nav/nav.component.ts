import {Component, AfterViewInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {EasterEggService} from '../../shared/easter-egg.service';
import {Router} from '@angular/router';

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
              private router: Router,
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

    if (this.eggsCounter === 0) {
      let audio = new Audio('assets/audio/snake.mp3');
      audio.play();

      $('#info-content').hide();
      $('#about *, #labs *').textillate({
        in: {
          effect: 'fadeOut'
        }
      });

      setTimeout(() => {
        this.router.navigate(['/zoomquilt']);
      }, 8000);
    }
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}

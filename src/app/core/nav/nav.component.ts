import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {EasterEggService} from '../../shared/easter-egg.service';
import {Router} from '@angular/router';

declare let $;

@Component({
  selector: 'ir-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

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

  refreshCounter(counter): void {
    this.eggsCounter = counter;

    if (this.eggsCounter === 0) {
      const audio = new Audio('assets/audio/snake.mp3');
      audio.play();

      $('#info-content').hide();
      $('#about *, #info *, #path *, #projects *').textillate({
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

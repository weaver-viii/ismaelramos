import {Component, AfterViewInit} from '@angular/core';
import {EasterEggService} from '../../shared/easter-egg.service';
import {TranslateService} from 'ng2-translate';

declare let $;

@Component({
  selector: 'ir-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {
  private greetings = ['Hello!', 'Salut!', 'Hallo!', 'Hola!', 'Konnichiwa!', 'Hi!', 'Hey!'];
  greeting: string;
  randomLike: string;
  projects: Array<any>;

  constructor(private easterEggService: EasterEggService,
              private translateService: TranslateService) {
    this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
    let likes = ['electronicMusic', 'goToCinema', 'myGirlfriend', 'goCiclying',
      'goingToTheMountain', 'playingSquash', 'swimming', 'diving', 'coding', 'playVideogames',
      'driving', 'sleeping'];

    this.randomLike = likes[Math.floor(Math.random() * likes.length)];
    this.loopLikes(likes);

    this.translateService.get(['PPSWebsite', 'PackingUpApp', 'GSCApp']).subscribe((texts) => {
      this.projects = [
        {
          id: '001',
          name: texts['PPSWebsite'],
          link: 'https://www.peluqueriapilarsilvan.com'
        },
        {
          id: '002',
          name: texts['PackingUpApp'],
          link: 'https://play.google.com/store/apps/details?id=packingup.core.activities&hl=es'
        },
        {
          id: '003',
          name: 'SECD',
          link: 'https://sourceforge.net/projects/secd/'
        },
        {
          id: '004',
          name: texts['GSCApp'],
          link: 'https://play.google.com/store/apps/details?id=gijonsquashclub.liga'
        },
      ];
    });
  }

  loopLikes(likes) {
    let offset = 0;
    likes.forEach((like, index) => {
      setTimeout(() => {
        this.randomLike = like;
        if (index === likes.length - 1) {
          this.loopLikes(likes);
        }
      }, 3000 + offset);
      offset += 3000;
    });
  }

  ngAfterViewInit() {
    $('#greeting').textillate({in: {delay: 200, effect: 'slideInLeft'}});
  }

  clickGreeting() {
    $('#greeting span').textillate({in: {effect: 'hinge'}});
    this.easterEggService.decreaseCounter();
  }

  clickSmile() {
    $('#smile span').textillate({
      in: {
        effect: 'flash', callback: () => {
          $('#smile span').hide();
          this.easterEggService.decreaseCounter();
        }
      }
    });
  }
}

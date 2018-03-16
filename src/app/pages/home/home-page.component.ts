import {AfterViewInit, Component} from '@angular/core';
import {EasterEggService} from '../../shared/easter-egg.service';

declare let $;

@Component({
  selector: 'ir-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {
  randomLike: string;
  projects: Array<any>;

  constructor(private easterEggService: EasterEggService) {

    const likes = ['electronicMusic', 'goToCinema', 'goCiclying',
      'goingToTheMountain', 'playingSquash', 'swimming', 'diving', 'playVideogames',
      'driving', 'sleeping'];

    this.loopLikes(likes, 0);

    this.projects = [
      {
        id: '001',
        name: 'PPSWebsite',
        link: 'https://www.peluqueriapilarsilvan.com'
      },
      {
        id: '002',
        name: 'AngularExampleApp',
        link: 'https://angularexampleapp.com'
      },
      {
        id: '003',
        name: 'AngularExampleLibrary',
        link: 'https://github.com/Ismaestro/angular-example-library'
      },
      {
        id: '004',
        name: 'PackingUpApp',
        link: 'https://play.google.com/store/apps/details?id=packingup.core.activities&hl=es'
      },
      {
        id: '005',
        name: 'SECD',
        link: 'https://sourceforge.net/projects/secd/'
      },
      {
        id: '006',
        name: 'GSCApp',
        link: 'https://play.google.com/store/apps/details?id=gijonsquashclub.liga'
      },
      {
        id: '007',
        name: 'thisWebpage',
        link: 'https://github.com/Ismaestro/ismaelramos'
      },
    ];
  }

  loopLikes(likes, index) {
    if (index === likes.length) {
      return this.loopLikes(likes, 0);
    }
    this.randomLike = likes[index];
    setTimeout(() => {
      this.loopLikes(likes, index + 1);
    }, 2500);
  }

  ngAfterViewInit() {
    $('#greeting').textillate({in: {delay: 200, effect: 'slideInLeft'}});
  }

  clickGreeting() {
    $('#greeting img').textillate({in: {effect: 'hinge'}});
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

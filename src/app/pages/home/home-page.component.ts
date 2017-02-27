import {Component, AfterViewInit} from '@angular/core';
import {EasterEggService} from '../../shared/easter-egg.service';

declare let $;

@Component({
  selector: 'ir-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {
  private greetings = ['Hello!', 'Salut!', 'Hallo!', 'Hola!', 'Konnichiwa!', 'Hi!', 'Hey!'];
  greeting: string;
  labs: Array<any>;

  constructor(private easterEggService: EasterEggService) {
    this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
    this.labs = [
      {
        id: '001',
        name: 'Web Peluqueria Pilar Silvan',
        link: 'https://www.peluqueriapilarsilvan.com'
      },
      {
        id: '002',
        name: 'Packing up',
        link: 'https://play.google.com/store/apps/details?id=packingup.core.activities&hl=es'
      },
      {
        id: '003',
        name: 'SECD',
        link: 'https://sourceforge.net/projects/secd/'
      },
      {
        id: '004',
        name: 'Gijón Squash Club app',
        link: 'https://play.google.com/store/apps/details?id=gijonsquashclub.liga'
      },
    ];
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

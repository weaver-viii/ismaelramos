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
        name: 'Packing up',
        link: 'https://play.google.com/store/apps/details?id=packingup.core.activities&hl=es'
      }
    ];
  }

  ngAfterViewInit() {
    $('#greeting').textillate({in: {delay: 200, effect: 'slideInLeft'}});
  }

  clickGreeting() {
    $('#greeting span').textillate({in: {effect: 'hinge'}});
    this.easterEggService.decreaseCounter();
  }
}

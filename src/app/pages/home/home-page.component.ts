import {Component, AfterViewInit} from '@angular/core';

declare let $;

@Component({
  selector: 'ir-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {
  private greetings = ['Hello!', 'Salut!', 'Hallo!', 'Hola!', 'Konnichiwa!', 'Hi!', 'Hey!'];
  greeting: string;

  constructor() {
    this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }

  ngAfterViewInit() {
    $('#greeting').textillate({delay: 500, in: {delay: 250, effect: 'slideInLeft'}});
  }
}

import {Component, AfterViewInit} from '@angular/core';

declare let $;

@Component({
  selector: 'ir-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {
  private greetings = ['Hello', 'Salut', 'Hallo', 'Ciao', 'Hola', 'Konnichiwa', 'Hi'];
  greeting: string;

  constructor() {
    this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }

  ngAfterViewInit() {
    $('#greeting').textillate({in: {delay: 250, effect: 'slideInLeft'}});
    $('#info-title, #info-content').textillate({
      in: {
        delay: 5, effect: 'fadeInDown', callback: function () {
          console.log("EEE");
        }
      }
    });
  }

}

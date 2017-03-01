import {Component, AfterViewInit} from '@angular/core';
import {EasterEggService} from '../../shared/easter-egg.service';

declare let $;

@Component({
  selector: 'ir-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements AfterViewInit {

  constructor(private easterEggService: EasterEggService) {
  }

  ngAfterViewInit() {
    $('#footer-email a').textillate({in: {effect: 'bounceInLeft'}});
    $('#footer-social-links span').textillate({initialDelay: 250, in: {effect: 'bounceInRight'}});
  }

  hideEmail() {
    let div = 'footer > div';
    $(div).css('display', 'inline-table');
    $(div).css('float', 'right');
    $('#footer-email').hide();
    this.easterEggService.decreaseCounter();
  }
}
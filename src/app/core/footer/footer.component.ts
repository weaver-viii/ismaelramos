import {Component, AfterViewInit} from '@angular/core';

declare let $;

@Component({
  selector: 'ir-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements AfterViewInit {

  ngAfterViewInit() {
    $('#footer-email a').textillate({in: {effect: 'bounceInLeft'}});
    $('#footer-social-links span').textillate({initialDelay: 250, in: {effect: 'bounceInRight'}});
  }

  hideEmail() {
    $('#footer-email').hide();
  }

  showEmail() {
    $('#footer-email').show();
  }
}

import {Component, AfterViewInit} from '@angular/core';

declare let $;

@Component({
  selector: 'ir-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements AfterViewInit {

  ngAfterViewInit() {
    $('#footer-email a').textillate({in: {effect: 'bounceInUp'}});
    $('#footer-social-links span').textillate({in: {effect: 'bounceInUp'}});
  }

}

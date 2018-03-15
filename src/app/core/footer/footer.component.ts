import {AfterViewInit, Component} from '@angular/core';
import {EasterEggService} from '../../shared/easter-egg.service';

declare const $;

@Component({
  selector: 'ir-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  constructor(private easterEggService: EasterEggService) {
  }

  hideEmail() {
    $('#footer-email').hide();
    $('#footer-troll').show();
    this.easterEggService.decreaseCounter();
  }
}

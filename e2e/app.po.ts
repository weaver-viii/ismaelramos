import {browser, element, by} from 'protractor';

export class IsmaelRamosHomePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('toh-hero-top h3')).getText();
  }
}

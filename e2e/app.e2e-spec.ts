import {IsmaelRamosHomePage} from './app.po';

describe('Ismael Ramos App', function () {
  let page: IsmaelRamosPage;

  beforeEach(() => {
    page = new IsmaelRamosPage();
  });

  it('Title', () => {
    page.navigateTo();
  });
});

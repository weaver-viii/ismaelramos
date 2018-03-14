import {HomePage} from './home.po';

describe('Ismael Ramos App', function () {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('Title', () => {
    page.navigateTo();
  });
});

import {HomePage} from './home-page';

describe('Ismael Ramos App', function () {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('Title', () => {
    page.navigateTo();
  });
});

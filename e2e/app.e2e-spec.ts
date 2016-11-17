import { FirAngPage } from './app.po';

describe('fir-ang App', function() {
  let page: FirAngPage;

  beforeEach(() => {
    page = new FirAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Angular2cliPage } from './app.po';

describe('angular2cli App', function() {
  let page: Angular2cliPage;

  beforeEach(() => {
    page = new Angular2cliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { OrdersdashPage } from './app.po';

describe('ordersdash App', function() {
  let page: OrdersdashPage;

  beforeEach(() => {
    page = new OrdersdashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { CmpnykrtaskPage } from './app.po';

describe('cmpnykrtask App', () => {
  let page: CmpnykrtaskPage;

  beforeEach(() => {
    page = new CmpnykrtaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

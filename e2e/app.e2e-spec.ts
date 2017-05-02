import { AppDemoPage } from './app.po';

describe('app-demo App', () => {
  let page: AppDemoPage;

  beforeEach(() => {
    page = new AppDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

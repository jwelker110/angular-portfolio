import { YtSearchPage } from './app.po';

describe('yt-search App', function() {
  let page: YtSearchPage;

  beforeEach(() => {
    page = new YtSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

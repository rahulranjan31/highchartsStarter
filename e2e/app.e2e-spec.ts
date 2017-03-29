import { HighchartsStarterPage } from './app.po';

describe('highcharts-starter App', function() {
  let page: HighchartsStarterPage;

  beforeEach(() => {
    page = new HighchartsStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

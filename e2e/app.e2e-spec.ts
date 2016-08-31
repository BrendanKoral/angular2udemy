import { Angular2udemycoursePage } from './app.po';

describe('angular2udemycourse App', function() {
  let page: Angular2udemycoursePage;

  beforeEach(() => {
    page = new Angular2udemycoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

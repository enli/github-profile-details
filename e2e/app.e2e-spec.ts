import { GithubProfileDetailsPage } from './app.po';

describe('github-profile-details App', () => {
  let page: GithubProfileDetailsPage;

  beforeEach(() => {
    page = new GithubProfileDetailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  // LIST OF ORGS
  //  /orgs
  this.route('orgs', {});

  // INDIVIDUAL ORG
  this.route('org', { path: 'org/:id' }, function() {
    // org/emberjs

    // LIST OF REPOS
    this.route('repos', {});

    // INDIVIDUAL REPO
    // org/jquery/jquery-ui
    this.route('repo', { path: ':repoid' }, function() {
      this.route('branches', {});
      this.route('issues', {});
    });
    this.route('notfound', {});
  });
  this.route('notfound', { path: '*path' });
});

export default Router;

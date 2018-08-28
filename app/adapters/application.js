import DS from 'ember-data';
import { get } from '@ember/object';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  accessToken: 'ee8da5c58a311cf511a967309431d3a32c88e63e',

  urlForQueryRecord(query, modelName) {
    switch (modelName) {
      case 'org':
        return `${get(this, 'host')}/orgs/${query.orgId}?access_token=${get(
          this,
          'accessToken'
        )}`;
      case 'repo':
        return `${get(this, 'host')}/repos/${query.orgId}/${
          query.repoId
        }?access_token=${get(this, 'accessToken')}`;
      default:
        return this._super(...arguments);
    }
  },

  urlForQuery(query, modelName) {
    switch (modelName) {
      case 'repo':
        return `${get(this, 'host')}/orgs/${
          query.orgId
        }/repos?access_token=${get(this, 'accessToken')}`;
      case 'issue':
        return `${get(this, 'host')}/repos/${query.orgId}/${
          query.repoId
        }/issues?access_token=${get(this, 'accessToken')}`;
      case 'branch':
        return `${get(this, 'host')}/repos/${query.orgId}/${
          query.repoId
        }/branches?access_token=${get(this, 'accessToken')}`;
      default:
        return this._super(...arguments);
    }
  },
});

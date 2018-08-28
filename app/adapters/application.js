import DS from 'ember-data';
import { get } from '@ember/object';

export const ACCESS_TOKEN = 'your_access_token';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  urlForQueryRecord(query, modelName) {
    switch (modelName) {
      case 'org':
        return `${get(this, 'host')}/orgs/${
          query.orgId
        }?access_token=${ACCESS_TOKEN}`;
      case 'repo':
        return `${get(this, 'host')}/repos/${query.orgId}/${
          query.repoId
        }?access_token=${ACCESS_TOKEN}`;
      default:
        return this._super(...arguments);
    }
  },

  urlForQuery(query, modelName) {
    switch (modelName) {
      case 'repo':
        return `${get(this, 'host')}/orgs/${
          query.orgId
        }/repos?access_token=${ACCESS_TOKEN}`;
      case 'issue':
        return `${get(this, 'host')}/repos/${query.orgId}/${
          query.repoId
        }/issues?access_token=${ACCESS_TOKEN}`;
      case 'branch':
        return `${get(this, 'host')}/repos/${query.orgId}/${
          query.repoId
        }/branches?access_token=${ACCESS_TOKEN}`;
      default:
        return this._super(...arguments);
    }
  },
});

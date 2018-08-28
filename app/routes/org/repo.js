import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    let orgId = get(this.modelFor('org'), 'login');
    return this.store.queryRecord('repo', {
      orgId,
      repoId: params.repoid,
    });
  },
});

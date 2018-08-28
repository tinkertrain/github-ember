import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    let orgId = get(this.modelFor('org'), 'login');
    let repoId = get(this.modelFor('org.repo'), 'name');

    return this.store.query('issue', {
      orgId,
      repoId,
    });
  },
});

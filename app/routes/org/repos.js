import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    let orgId = get(this.modelFor('org'), 'login');

    return this.store.query('repo', {
      orgId,
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('model', model);
  },

  activate() {
    // When the user arrives,
    // reset the language filter by unsetting the `lang` property
    this.controllerFor('org.repos').set('lang', undefined);
  },
});

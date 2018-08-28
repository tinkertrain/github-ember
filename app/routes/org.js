import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    error(jqxhr) {
      if (jqxhr.status === 404) {
        this.intermediateTransitionTo('org.notfound');
      } else {
        return true; // bubble up
      }
    },
  },

  model(params) {
    return this.store.queryRecord('org', {
      orgId: params.id,
    });
  },
});

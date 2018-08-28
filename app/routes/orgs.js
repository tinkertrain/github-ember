import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 'emberjs',
      },
      {
        id: 'ember-cli',
      },
      {
        id: 'microsoft',
      },
      {
        id: 'yahoo',
      },
      {
        id: 'netflix',
      },
      {
        id: 'facebook',
      },
    ];
  },

  actions: {
    handleEnter(value) {
      if (value && value.length > 3) {
        this.transitionTo('org', value);
      }
    },
  },
});

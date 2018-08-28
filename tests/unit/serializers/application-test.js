import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | application', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const serializer = store.serializerFor('application');

    assert.ok(serializer);
  });

  test('it normalizes the response', function(assert) {
    assert.expect(3);

    const store = this.owner.lookup('service:store');

    const org = [
      {
        login: 'linkedin',
        name: 'Linkedin',
        avatar_url: 'http://someurl',
        id: '1234',
      },
    ];
    const normalizedResponse = store
      .serializerFor('application')
      .normalizeResponse(
        store,
        store.modelFor('org'),
        org,
        'linkedin',
        'query'
      );

    assert.equal(
      normalizedResponse.data.length,
      1,
      'There is one record in the data array'
    );
    assert.deepEqual(
      normalizedResponse.data[0].attributes.login,
      'linkedin',
      'The org login is in the normalized response'
    );
    assert.deepEqual(
      normalizedResponse.data[0].attributes.avatar_url,
      'http://someurl',
      'The org avatar url is in the normalized response'
    );
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';

module('Unit | Controller | repos', function(hooks) {
  setupTest(hooks);

  test('Computed Properties work', function(assert) {
    assert.expect(4);

    const controller = this.owner.lookup('controller:org.repos');
    const model = [
      EmberObject.create({
        language: 'Javascript',
      }),
      EmberObject.create({
        language: 'Html',
      }),
      EmberObject.create({
        language: 'Css',
      }),
      EmberObject.create({
        language: 'Javascript',
      }),
      EmberObject.create({
        language: null,
      }),
    ];
    controller.set('model', model);

    assert.deepEqual(
      controller.get('allLanguages'),
      ['Javascript', 'Html', 'Css', 'Javascript', 'Other'],
      'CP allLanguages contains all available languages'
    );

    assert.ok(
      controller.get('allLanguages').indexOf('Other') !== -1,
      'CP allLanguages converts null to "other"'
    );

    assert.deepEqual(
      controller.get('languages'),
      ['Javascript', 'Html', 'Css', 'Other'],
      'CP allLanguages contains unique keys'
    );

    assert.deepEqual(
      controller.get('sortedLanguages'),
      ['Css', 'Html', 'Javascript', 'Other'],
      'CP sortedLanguages is a sorted array'
    );
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('it creates the correct urls for urlForQueryRecord', function(assert) {
    assert.expect(2);

    const adapter = this.owner.lookup('adapter:application');
    const urlForQueryRecordOrg = adapter.urlForQueryRecord(
      {
        orgId: 'netflix',
      },
      'org'
    );
    const urlForQueryRecordRepo = adapter.urlForQueryRecord(
      {
        orgId: 'netflix',
        repoId: 'falcor',
      },
      'repo'
    );

    assert.equal(
      urlForQueryRecordOrg,
      'https://api.github.com/orgs/netflix?access_token=ee8da5c58a311cf511a967309431d3a32c88e63e',
      'Correct urlForQueryRecord for org model'
    );
    assert.equal(
      urlForQueryRecordRepo,
      'https://api.github.com/repos/netflix/falcor?access_token=ee8da5c58a311cf511a967309431d3a32c88e63e',
      'Correct urlForQueryRecord for repo model'
    );
  });

  test('it creates the correct urls for urlForQuery', function(assert) {
    assert.expect(3);

    const adapter = this.owner.lookup('adapter:application');
    const urlForQueryRepo = adapter.urlForQuery(
      {
        orgId: 'netflix',
      },
      'repo'
    );
    const urlForQueryIssue = adapter.urlForQuery(
      {
        orgId: 'netflix',
        repoId: 'falcor',
      },
      'repo'
    );
    const urlForQueryBranch = adapter.urlForQuery(
      {
        orgId: 'netflix',
        repoId: 'falcor',
      },
      'repo'
    );

    assert.equal(
      urlForQueryRepo,
      'https://api.github.com/orgs/netflix/repos?access_token=ee8da5c58a311cf511a967309431d3a32c88e63e',
      'Correct urlForQuery for repo model'
    );
    assert.equal(
      urlForQueryIssue,
      'https://api.github.com/orgs/netflix/repos?access_token=ee8da5c58a311cf511a967309431d3a32c88e63e',
      'Correct urlForQuery for issue model'
    );
    assert.equal(
      urlForQueryBranch,
      'https://api.github.com/orgs/netflix/repos?access_token=ee8da5c58a311cf511a967309431d3a32c88e63e',
      'Correct urlForQuery for branch model'
    );
  });
});

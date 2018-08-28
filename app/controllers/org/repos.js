import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { isPresent } from '@ember/utils';
import { map, sort, uniq } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  allLanguages: map('model', repo => {
    // Some repos have a "language === null", let's categorize those as "Other"
    return isPresent(get(repo, 'language')) ? get(repo, 'language') : 'Other';
  }).readOnly(),

  languages: uniq('allLanguages').readOnly(),

  sortedLanguages: sort('languages', function(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  }).readOnly(),

  filteredRepos: computed('lang', 'model', function() {
    const model = get(this, 'model');
    let lang = get(this, 'lang');

    if (isPresent(lang)) {
      // Handle the repos we categorized as "Other"
      if (lang === 'Other') {
        lang = null;
      }
      return model.filter(repo => repo.language === lang);
    }
    return model;
  }),

  actions: {
    filterBy(language) {
      const lang = get(this, 'lang');

      // If the same pill get's clicked, reset the filter
      if (language === lang) {
        set(this, 'lang', undefined);
      } else {
        set(this, 'lang', language);
      }
    },
  },
});

import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  html_url: attr('string'),
  language: attr('string'),
  issues: hasMany('issue'),
  branches: hasMany('branch'),
});

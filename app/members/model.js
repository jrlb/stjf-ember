import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  instrument: DS.attr('string'),
  biography: DS.attr('string'),
  section: DS.attr('string')
});

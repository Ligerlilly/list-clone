import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  category: DS.belongsTo('category', { async: true }),
  listings: DS.hasMany('listing', { async: true })
});

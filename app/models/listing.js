import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  subCategory: DS.belongsTo('subCategory', { async: true })

});

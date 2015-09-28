import Ember from 'ember';

export default Ember.Component.extend({
  sortByDate: ['createdAt:desc'],
  sortedByDateListing: Ember.computed.sort('subCategory.listings', 'sortByDate')
});

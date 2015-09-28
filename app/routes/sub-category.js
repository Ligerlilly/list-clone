import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('subCategory', params.subCategory_id);
  },
  actions: {
    addListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var subCategory = params.subCategory;
      subCategory.get('listing').addObject(newListing);
      newListing.save().then(function() {
        return subCategory.save();
      });
      this.transitionTo('subCategory', params.subCategory);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('subCategory', params.subCategory_id);
  },
  actions: {
    addListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var subCategory = params.subCategory;
      subCategory.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return subCategory.save();
      });
      this.transitionTo('subCategory', params.subCategory);
    },
    deleteSubCategory(subCategory) {
      if(confirm("Are you sure?")){
        subCategory.get('listings').then(function(listings){
          listings.forEach(function(listing){
            listing.destroyRecord();
          })
          subCategory.destroyRecord();
        });
        this.transitionTo('index')
      }
    },
    editSubCategory(subCategory, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          subCategory.set(key, params[key]);
        }
      });
      subCategory.save();
      this.transitionTo('subCategory', subCategory.id);
    }
  }
});

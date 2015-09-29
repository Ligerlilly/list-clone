import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id)
  },
  actions: {
    deleteListing(listing) {
      if(confirm("Are you sure?")) {
        this.transitionTo('subCategory', listing.get('subCategory'));
        listing.destroyRecord();

      }
    },
    editListing(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          listing.set(key, params[key]);
        }
      });
      listing.save();
      this.transitionTo('listing', listing.id);
    }
  }

});

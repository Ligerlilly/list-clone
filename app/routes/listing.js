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
    }
  }

});

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('listing').then(function(listings) {
      var regex = new RegExp(params.searchQuery);
      return listings.filter(function(listing) {
        return (regex.test(listing.get('title')) || regex.test(listing.get('content')));
      });
    });
  }
});

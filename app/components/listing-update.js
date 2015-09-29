import Ember from 'ember';

export default Ember.Component.extend({
  updateListing: false,
  actions: {
    showUpdateForm() {
      this.set('updateListing', true);
    },
    hideUpdateForm() {
      this.set('updateListing', false);
    },
    editListing(listing) {
      var params = {
        title: this.get('title'),
        content: this.get('title'),
        createdAt: listing.get('createdAt'),
        updatedAt: new Date()
      };
      this.sendAction('editListing', listing, params);
      this.set('updateListing', false);
    }
  }
});

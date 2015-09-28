import Ember from 'ember';

export default Ember.Component.extend({
  newListing: false,
  actions: {
    showListingForm() {
      this.set('newListing', true);
    },
    hideListingForm() {
      this.set('newListing', false);
    },
    addListing() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        subCategory: this.get('subCategory'),
        createdAt: new Date(),
        updatedAt: ''
      }
      this.sendAction('addListing', params);
      this.set('newListing', false);
    }
  }
});

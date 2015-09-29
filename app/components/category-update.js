import Ember from 'ember';

export default Ember.Component.extend({
  updateCategory: false,
  actions: {
    showUpdateForm() {
      this.set('updateCategory', true);
    },
    hideUpdateForm() {
      this.set('updateCategory', false);
    },
    editSubCategory(category) {
      var params = {
        title: this.get('title')
      };
      this.sendAction('editCategory', category, params);
      this.set('updateCategory', false);
    }
  }
});

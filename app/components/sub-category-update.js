import Ember from 'ember';

export default Ember.Component.extend({
  updateSubCategory: false,
  actions: {
    showUpdateForm() {
      this.set('updateSubCategory', true);
    },
    hideUpdateForm() {
      this.set('updateSubCategory', false);
    },
    editSubCategory(subCategory) {
      var params = {
        title: this.get('title')
      };
      this.sendAction('editSubCategory', subCategory, params);
      this.set('updateSubCategory', false);
    }
  }
});

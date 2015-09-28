import Ember from 'ember';

export default Ember.Component.extend({
  newCategory: false,
  actions: {
    showCategoryForm() {
      this.set('newCategory', true);
    },
    hideCategoryForm() {
      this.set('newCategory', false);
    },
    addCategory() {
      var params = {
        title: this.get('title')
      }
      this.sendAction('addCategory', params);
      this.set('newCategory', false)
    }
  }
});

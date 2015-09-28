import Ember from 'ember';

export default Ember.Component.extend({
  newSubCategory: false,
  actions: {
    showSubCategoryForm() {
      this.set('newSubCategory', true);
    },
    hideSubCategoryForm() {
      this.set('newSubCategory', false);
    },
    addSubCategory() {
      var params = {
        title: this.get("title"),
        category: this.get("category")
      }
      this.sendAction("addSubCategory", params);
      this.set("newSubCategory", false)
    }
  }
});

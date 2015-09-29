import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addSubCategory(params) {
      this.sendAction("addSubCategory", params);
    },
    delete(category) {
      if (confirm("Are you sure?")) {
        this.sendAction('delete', category);
      }
    },
    editCategory(category, params) {
      this.sendAction('editCategory', category, params);
    }

  }
});

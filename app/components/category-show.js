import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addSubCategory(params) {
      this.sendAction("addSubCategory", params);
    }

  }
});

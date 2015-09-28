import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    addSubCategory(params) {
      var newSubCategory = this.store.createRecord('subCategory', params);
      var category = params.category;
      category.get('subCategories').addObject(newSubCategory);
      newSubCategory.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    }
  }
});

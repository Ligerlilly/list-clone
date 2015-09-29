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
    },
    delete(category) {

      category.get('subCategories').then(function(subCategories) {
        subCategories.forEach(function(subCategory) {
          subCategory.get('listings').then(function(listings) {
            listings.forEach(function(listing) {
              listing.destroyRecord();
            });
            subCategory.destroyRecord();
          });

        });
        category.destroyRecord();
      });
      this.transitionTo('index');
    },
    editCategory(category, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          category.set(key, params[key]);
        }
      });
      category.save();
      this.transitionTo('index');
    }
  }
});

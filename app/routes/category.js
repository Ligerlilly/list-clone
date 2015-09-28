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
      var subCategories = category.get('subCategories');
      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }

      subCategories.forEach(function(subCategory) {
        subCategory.get('listings').then(function(listings) {
          listings.forEach(function(listing) {
            sleep(1000);
            listing.destroyRecord();
          });
        });

        subCategory.destroyRecord();
      });
      category.destroyRecord();
      this.transitionTo('index');
    }
  }
});

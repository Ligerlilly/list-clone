import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category', { path: '/categories/:category_id' });
  this.route('subCategory', { path: '/subCategories/:subCategory_id' });
  this.route('listing', { path: '/listings/:listing_id' });
});

export default Router;

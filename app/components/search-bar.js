import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    search() {
      var params = {
        searchQuery: this.get('searchQuery')
      };
      this.sendAction('search', params);
    }
  }
});

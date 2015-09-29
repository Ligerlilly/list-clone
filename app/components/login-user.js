import Ember from 'ember';

export default Ember.Component.extend({
  newLogin: false,
  actions: {
    showLoginForm() {
      this.set('newLogin', true);
    },
    signIn() {
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.sendAction('signIn', 'password', params);
    }
  }
});

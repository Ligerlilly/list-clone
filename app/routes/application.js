import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      // this.get("session").open("firebase", { provider: provider, email: 'quizathaderat@yohoo.com', password: 'password'}).then(function(data) {
      //   console.log(data.currentUser);
      // });
      var ref = new Firebase("https://listclone.firebaseio.com/");
      // ref.createUser({
      //   email    : "quizathaderat@yahoo.com",
      //   password : "password"
      // }, function(error, userData) {
      //   if (error) {
      //     console.log("Error creating user:", error);
      //   } else {
      //     console.log("Successfully created user account with uid:", userData.uid);
      //   }
      // });
      ref.authWithPassword({
        email    : "quizathaderat@yahoo.com",
        password : "password"
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          window.location.reload();
        }
      });
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});

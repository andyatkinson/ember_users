App.UserEditController = Ember.ObjectController.extend({
  actions: {
    save: function(params) {
      var user = this.get("model");
      user.save();

      this.transitionToRoute("user", user);
    }
  }
});

(function() {

  BackboneApp.Views.CommentView = Backbone.Marionette.ItemView.extend({
    template: "#comment-template"
  });

  BackboneApp.Views.CreateCommentView = Backbone.Marionette.ItemView.extend({
    template: "#create-comment-template",
  });

  BackboneApp.Views.ActivityView = Backbone.Marionette.ItemView.extend({
    template: "#activity-template",

    events: {
      "click a.edit-comment": "createComment",
      "dblclick": "test"
    },
    createComment: function(el)  {
      this.$el.find(".edit-comment-view").toggle();
    }
  });

})();
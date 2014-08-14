(function(BackboneApp, _, HELPERS, $) {
	BackboneApp.CompositeViews = BackboneApp.CompositeViews || {};
  
  BackboneApp.Views.CommentView = Backbone.Marionette.ItemView.extend({
    template: "#comment-template",

    events: {
      "click a.delete-comment": "deleteComment"
    },
    
    creatorLoggedIn: function() {
      var creator = this.model.get('createdBy').id;
      var current = Storage.get('currentUser').id;
      return current === creator;
    },

    onRender: function() {
      if( !this.creatorLoggedIn() ) {
        this.$('.delete-comment').remove();
      }
    },
    remove: function() {
      this.$el.remove();
    },
    deleteComment: function() {
      this.model.destroy({
        success: function(model, response) {
          console.log("removed " + response.id)
          console.log(response);
        },
        contentType: "application/json"
      });
      // this.model.deleteComment();
    }
  });

	BackboneApp.CollectionViews.CommentsView = Backbone.Marionette.CollectionView.extend({
		childView: BackboneApp.Views.CommentView
	});

	BackboneApp.Views.ActivityView = Backbone.Marionette.ItemView.extend({
		template: "#activity-template",
	});

	BackboneApp.CollectionViews.ActivityView = Backbone.Marionette.CompositeView.extend({
    template: "#activity-template",

    childView: BackboneApp.Views.CommentView,

    childViewContainer: ".activity-comments-container",

    events: {
      "click a.show-comment": "showNewComment",
      "click a.delete-activity": "deleteDN",
      "keyup input.create-comment-input" : "createComment"
    },

    initialize: function() {
      this.collection = this.model.get('comments');
    },
    creatorLoggedIn: function() {
      var creator = this.model.get('createdBy').id;
      var current = Storage.get('currentUser').id;
      return current === creator;
    },
    onRender: function() {
      if( !this.creatorLoggedIn() ) {
        this.$('.delete-activity').remove();
      }
    },
    // gets called by collection above
    remove: function() {
      this.$el.remove();
    },
    deleteDN: function() {
      this.model.deleteDN();
    },
    showNewComment: function()  {
      var $input = this.$(".create-comment-input");
      $input.slideToggle("fast");
      $input.focus();
    },
    createComment: function(event) {
      var ENTER_KEY = 13;
      var $input = this.$(".create-comment-input");
      var content = $input.val();

      if ( event.keyCode===ENTER_KEY  && !content.isEmpty() ) {
        $input.val('');
        return this.model.addCommentDN(content);
      }
      return false;
    },
	});

  BackboneApp.CollectionViews.FeedView = Backbone.Marionette.CompositeView.extend({
		template: "#feed-container",
    childView: BackboneApp.CollectionViews.ActivityView,
    childViewContainer: "#activity-list",
    events: {
      "keyup #create-post-input" : "createActivity"
    },

    createActivity: function(event) {
      var ENTER_KEY = 13;
      var $input = this.$el.find("#create-post-input");
      var content = $input.val();

      if ( event.keyCode===ENTER_KEY  && !content.isEmpty() ) {
        $input.val('');   // emptyinputs

        var activitymodel = new BackboneApp.Models.Activity({
          createdBy: Storage.get('currentUser'),
          content: content,
          comments: new BackboneApp.Collections.Comments([])
        });

        var self = this;
        activitymodel.saveDN().then(function(response) {
          self.collection.add(activitymodel, {at:0});
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    },
	});

})(BackboneApp, _, HELPERS, $);
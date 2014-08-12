(function(BackboneApp, _, HELPERS, $) {
	BackboneApp.CompositeViews = BackboneApp.CompositeViews || {};
  
  BackboneApp.Views.CommentView = Backbone.Marionette.ItemView.extend({
    template: "#comment-template",
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

    initialize: function() {
      this.collection = this.model.get('comments');
    },
    creatorLoggedIn: function() {
      var creator = this.model.get('createdBy').id;
      var current = Storage.get('currentUser').id;
      return current === creator;
    },

    onRender: function() {
      // remove delete function if not loggedIn
      if( !this.creatorLoggedIn() ) {
        this.$el.find('.delete-activity').remove();
      }
    },

    events: {
      "click a.show-comment": "showComment",
      "click a.delete-activity": "destroy",
    },
    destroy: function() {
      var that = this;
      this.model.deleteDN().then(function(response) {
        // that.model.destroy();
        console.log("here i am")
        // window.location.reload();
      });
    },
    showComment: function()  {
      this.$el.find(".show-comment-view").toggle();
    }
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
      var content = $input.val().trim();

      if(event.keyCode === ENTER_KEY  && content) {
        
        $input.val('');   // emptyinputs

        var that = this;

        var activitymodel = new BackboneApp.Models.Activity({
          createdBy: Storage.get('currentUser'),
          content: content,
          comments: new BackboneApp.Collections.Comments([])
        });

        activitymodel.saveDN().then(function(response) {
          that.collection.add(activitymodel, {at:0});
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    },
	});

})(BackboneApp, _, HELPERS, $);
(function(BackboneApp, _, HELPERS, $) {
	BackboneApp.CompositeViews = BackboneApp.CompositeViews || {};
  BackboneApp.Views.CommentView = Backbone.Marionette.ItemView.extend({
    template: "#comment-template",
    // render: function() {
    //   var template = _.template($("#comment-template").html(), this.model.toJSON());
    //   this.$el.html(template);
    // }
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

    onBeforeRender: function() {
    },
		events: {
      "click a.edit-comment": "showComment",
      "click a.submit-comment": "createComment",
    },
    showComment: function()  {
      this.$el.find(".edit-comment-view").toggle();
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
      // if enter is pressed
      var inputContent = this.$el.find("#create-post-input").val();
      if(event.keyCode==13 && inputContent) {
        var that = this;
        var activitymodel = new BackboneApp.Models.Activity({
          createdBy: Storage.get('currentUser'),
          content: inputContent,
          comments: new BackboneApp.Collections.Comments([])
        });

        activitymodel.saveDN().then(function(response) {
          that.addActivityView(activitymodel, response.id);
        });
      }
    },
    addActivityView: function(actModel, responseID) {
      var actview = new BackboneApp.CollectionViews.ActivityView({
        model: actModel
      });
      actview.render();
      this.$el.find(this.childViewContainer).prepend(actview.el);
      this.$el.find("#create-post-input").val('');
      // console.log(this.collection);
      this.collection.push(actModel);
      return actview;
    }
	});

})(BackboneApp, _, HELPERS, $);
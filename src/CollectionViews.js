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
		template: "#activity-template"
	});
	BackboneApp.CollectionViews.ActivityView = Backbone.Marionette.CompositeView.extend({
		template: "#activity-template",
		childView: BackboneApp.Views.CommentView,
		childViewContainer: ".activity-comments-container",
		initialize: function() {
			this.collection = this.model.get('comments');
		},
		events: {
      "click a.edit-comment": "showComment",
      "click a.submit-comment": "createComment",
    },
    showComment: function()  {
      this.$el.find(".edit-comment-view").toggle();
    },
    createComment: function() {
      // var Comment = BackboneApp.Models.Comment;
      // var url = 'otts/xapi/v2/resouces/{0}/comments'.format(this.model.get('id'));
      // var content = $el.find('.create-commment-input').text();
      // var newComment = new Comment({
      //   url: url,
      // });
      // var attrs = {
      //   "@cls": "comment",
      //   "content": newComment.get('content')
      // };
      // newComment.save(attrs);
    }
	});
	BackboneApp.CollectionViews.FeedView = Backbone.Marionette.CollectionView.extend({
		childView: BackboneApp.CollectionViews.ActivityView
	});

})(BackboneApp, _, HELPERS, $);
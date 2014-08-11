window.BackboneApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Filters: {},
  CollectionViews: {},
  init: function(user) {
	  'use strict';

		var createCommentsView = function(comments, el) {
			var coms = _.map(comments, function(comment) {
				return BackboneApp.Filters.filterComment(comment);
			});
			return new BackboneApp.CollectionViews.CommentsView({
				el: el,
				collection: new BackboneApp.Collections.Comments(coms)
			});
		};


		var createPostsView = function(activities, el) {
			return new BackboneApp.CollectionViews.FeedView({
				el: el,
				collection: activities
			});
			return null;
		};
		var createActivitiesCollection = function(activities) {
			var posts = _.chain(activities)
				.filter(function(activity) {
					var isCommunity = _.contains(activity.object.id.split('.'), "SocialGroup");
					var isPost = activity.verb === "post";
					return isPost && !isCommunity;
			  })
			  .map(function(activity) {
			  	return new BackboneApp.Models.Activity(
			  			BackboneApp.Filters.filterPost(activity)
			  	);
			  }).value();
			  return new BackboneApp.Collections.Feed(posts);
		}
		var createViews = function(data) {
			var model = createActivitiesCollection(data);
			var view = createPostsView(model, "#feed-container");
			view.listenTo(model, 'createActivity', view.render);
			return view.render();
		};
		var getCurrentUser = function(Q, $, userid) {
			var deferred = Q.defer();
			$.ajax({
		    url:'/otts/xapi/v2/resources/' + userid + '?method=get',
		    type: 'POST',
		    data: JSON.stringify({ 
					"@cls": "query",
					"fields": ["icons"] 
				}),
		    contentType: 'application/json',
		    success: function(user) {deferred.resolve(user)},
		    error: function() {
		    	deferred.reject(new Error("UNable to retrieve the current user"));
		    }
		  });
		  return deferred.promise;
		};
		var userPromise = getCurrentUser(Q, $, "@me");

		userPromise.then(function(User){
			// saveUser(User, Storage);
			// saveUser(User, window.Storage);
			Storage.saveUser(User);

			$.ajax({
		    url: '/otts/xapi/v2/resources/social.site.1.104.105?method=get',
		    type: 'POST',
		    data: JSON.stringify(post_JSON),
		    contentType: 'application/json',
		    success: function(data) {  createViews(data.site_feed);},
		    error: function() {console.log("not able to retrieve feed data");}
		  });

		});


		// createViews(EXAMPLE_FEED.site_feed);

	  // $.ajax({
	  //   url: '/otts/xapi/v2/resources/social.status.1.110.101/comments',
	  //   type: 'POST',
	  //   data: JSON.stringify({"@cls": "comment", "content": "comment004"}),
	  //   contentType: 'application/json',
	  //   success: function(data) { console.log(data);},
	  //   error: function() {console.log("not able to retrieve feed data");}
	  // });

	  // $.ajax({
	  //   url: '/otts/xapi/v2/resources/social.status.1.110.101/comments',
	  //   type: 'POST',
	  //   data: JSON.stringify({"@cls": "comment", "content": "comment004"}),
	  //   contentType: 'application/json',
	  //   success: function(data) { console.log(data);},
	  //   error: function() {console.log("not able to retrieve feed data");}
	  // });
	  // $.ajax({
	  //   url: '/otts/xapi/v2/resources/social.comment.1.13.301',
	  //   type: 'DELETE',
	  //   contentType: 'application/json',
	  //   success: function(data) { console.log(data);},
	  //   error: function() {console.log("not able to retrieve feed data");}
	  // });

  }
};

$(document).ready(function() {
  BackboneApp.init();
});
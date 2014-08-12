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
			// view.listenTo(model, 'createActivity', view.render);
			return view.render();
		};
		var getCurrentUser = function(userid) {
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
		    	deferred.reject(new Error("Unable to retrieve the current user"));
		    }
		  });
		  return deferred.promise;
		};
		var getSiteFeed = function() {
			var deferred = Q.defer();
			$.ajax({
				url: '/otts/xapi/v2/resources/social.site.1.104.105?method=get',
				type: 'POST',
				data: JSON.stringify(post_JSON),
				contentType: 'application/json',
				success: function(data) {  deferred.resolve(data.site_feed);},
				error: function() {console.log("not able to retrieve feed data");}
			});
		  return deferred.promise;
		};
		
		getCurrentUser("@me")
			.then(function(User){
				Storage.saveUser(User);
				return getSiteFeed();
			})
			.then(function(feed) {
				createViews(feed);
			})
			.done();
	}
};

$(document).ready(function() {
  BackboneApp.init();
});
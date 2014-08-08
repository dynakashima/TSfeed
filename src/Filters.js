(function() {
	BackboneApp.Filters = BackboneApp.Filters || {};
	
	BackboneApp.Filters.filterComment = function(commentObj) {
		var model_content = commentObj.content;
		var model_id =  commentObj.id;
		// var model_image_src = '/otts' + commentObj.icons[0];
		var model_created_at = HELPERS.timeConverter(commentObj.created_date);
		var user = commentObj.created_by;

		var model_created_by = {
			id: user.id,
			name: user.name,
			imgSrc: '/otts' + user.icons[0].value
		};
		return {
			id: model_id,
			content: model_content,
			createdBy : model_created_by,
			createdAt: model_created_at
		};
    };

	BackboneApp.Filters.filterPost = function(activity) {

		var icon_src = _.find(activity.actor.icons, function(icon) {
			return icon.type === 'icon';
		});

		var model_date = HELPERS.timeConverter(activity.published);
		
		var model_image_src = '/otts' + icon_src.value;

		var model_id =  activity.object.id;

		var temp_createdBy = {
			id: activity.actor.id,
			name: activity.actor.name,
			imgSrc: model_image_src
		};

		var comments = _.map(activity.object.comments, 
			function(comment) {
				return new BackboneApp.Models.Comment(
					BackboneApp.Filters.filterComment(comment)
				);
			});

		// assume for now that always have an icon image and position in
		// icons array is the same
		return {
			id: model_id,
			createdBy: temp_createdBy,
			createdAt: model_date,
			content: activity.object.content,
			comments: new BackboneApp.Collections.Comments(comments)
		};
    };
})();
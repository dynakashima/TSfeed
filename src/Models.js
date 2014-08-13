(function(BackboneApp, Backbone) {
	BackboneApp.Models = BackboneApp.Models || {};
	BackboneApp.Models.User = Backbone.Model.extend({
		id: null,
		name: null,
		imgSrc: null,
		isLoggedIn: function() {
			return this.get('id') === Storage.get('currentUser').id;
		}
	});
	BackboneApp.Models.Activity = Backbone.Model.extend({
		defaults: {
			id: null,
			createdBy: new BackboneApp.Models.User({}),
			createdAt: null,
			content: null,
			comments: []
		},
		// 
		saveDN: function() {
			var d = Q.defer();
			var that = this;
			var postStatusJSON =  {
				"@cls": "status",
				"content": that.get('content'),
				"subject": "status_post"
			};
			$.ajax({
				url: '/otts/xapi/v2/resources/',
				type: 'POST',
				data: JSON.stringify(postStatusJSON),
				contentType: 'application/json',
				success: function(data) {
					that.set({'id': data.id});
					d.resolve(data);
				},
				error: function() {
					d.reject(new Error("Unable to save new status"));
				}
			});
			return d.promise;
		},
		deleteDN: function(succ) {
			var self = this;
			$.ajax({
				url: '/otts/xapi/v2/resources/' + self.get('id'),
				type: 'DELETE',
				contentType: 'application/json',
				success: function(response) {
					self.collection.remove(self);
				},
				error: function() {
					throw new Error("Unable to delete status");
				}
			});
		},
	});
	BackboneApp.Models.ImagePost = Backbone.Model.extend({
		defaults: {
			id: null,
			createdBy: {
				id: 		null,
				name: 		null,
				imgSrc: 	null
			},
			image: {
				description: 	null,
				imgSrc: 		null
			},
			comments: [],
			createdAt: 	null,
		},
	});

	BackboneApp.Models.Comment = Backbone.Model.extend({
		defaults: {
			id: null,
			createdBy: {
				id: 		null,
				name: 		null,
				imageSrc: 	null
			},
			createdAt: null,
			content: null
		}
	});
		// 	// MODELS
		// BackboneApp.Models.User = Backbone.Model.extend({urlRoot: '/otts/xapi/v2/resources/'});
		// BackboneApp.Models.Activity = Backbone.Model.extend({});
		// BackboneApp.Models.Comment = Backbone.Model.extend({});

})(BackboneApp, Backbone);

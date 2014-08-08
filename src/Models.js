(function(BackboneApp, Backbone) {
	BackboneApp.Models = BackboneApp.Models || {};
	BackboneApp.Models.Activity = Backbone.Model.extend({
		defaults: {
			id: null,
			createdBy: {
				id: 		null,
				name: 		null,
				imgSrc: 	null
			},
			createdAt: null,
			content: null,
			comments: []
		}
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
		}
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

(function() {

	BackboneApp.Collections.Feed = Backbone.Collection.extend({
		model: BackboneApp.Models.Activity
	});	
	BackboneApp.Collections.Comments = Backbone.Collection.extend({
		model: BackboneApp.Models.Comment
	});
})();
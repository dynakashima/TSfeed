// add format to String class
window.Storage = {
	set: function(key, value) {
		if (!key || !value) {return;}
		if (typeof value === "object") {
			value = JSON.stringify(value);
		}
		localStorage.setItem(key, value);
	},

	get: function(key) {
		var value = localStorage.getItem(key);
		if (!value) {return;}
		// assume it is an object that has been stringified
		if (value[0] === "{") {
			value = JSON.parse(value);
		}
		return value;
	},

	saveUser: function(user) {
		var key = 'currentUser';
		var isNew = this.get(key) === undefined;

		var user = new BackboneApp.Models.User({
			id: user.id,
			name: user.name,
			imgSrc: '/otts' + user.icons[0].value
		});
		this.set(key, user.toJSON());

		return isNew;
	}
};

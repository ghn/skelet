define([
	
	// Libs
	"use!backbone"
],

function(Backbone) {
	
	/** MODEL */
	var friendModel = Backbone.Model.extend({
	
		defaults : {
			'first_name'	: 'Jules',
			'last_name'		: 'Verne',
			'age'			: 12
		},
	
		initialize : function() {
			this.bind("error", function(model, error) {
				console.log(error);
			});
		},
	
		validate : function(attributes) {
			if ((attributes.first_name == "") || (attributes.last_name == "")) {
				return "First name and last name must be set";
			}
		},
	
		full_name : function() {
			return this.escape('first_name') + " " + this.escape('last_name');
		}
	});
	
	/** COLLECTION */
	var friendCollection = Backbone.Collection.extend({
		model	: friendModel,
	
		url : 'friend',
		
		// constructor
		initialize : function() {},
		
		clear_list : function() {
			this.remove(this.models);
		},
	
		add_100_items : function() {
			var context = this;
			_(100).times(function() {
				context.add({
					first_name : 'toto',
					last_name : 'tutu'
				});
			});
		}
	});

	// !! important !!
	return new friendCollection;
});
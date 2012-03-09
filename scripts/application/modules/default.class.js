define([
	// Libs
	"use!backbone",
	
	// i18n
	"i18n!nls/lang",
	
	// templates
	"text!templates/default/default.html"
],

function(Backbone, lang, defaultTemplate) {
	
	var defaultModel = Backbone.Model.extend;

	var defaultCollection = Backbone.Collection.extend({
		model	: defaultModel,
	
		initialize : function() {
			this.template = new defaultView({model : this});
		}
	});

	var defaultView = Backbone.View.extend({
	
		el : $('#app'),
	
		template: '',
		
		initialize : function() {
			this.template = _.template(defaultTemplate);
		},
	
		render : function() {
			$(this.el).html( this.template({title : lang.title}) );
		}
	});
	
	// !! important !! -> the collection manage the view!
	return defaultCollection;
});
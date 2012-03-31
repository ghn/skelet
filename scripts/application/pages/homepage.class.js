define([
	// Libs
	"use!backbone",
	
	// i18n
	"i18n!nls/lang",
	
	// templates
	"text!templates/default/default.html"
],

function(Backbone, Dico, defaultTemplate) {
	
	var DefaultView = Backbone.View.extend({
	
		el : $('#app'),
	
		template: _.template(defaultTemplate),
		
		initialize : function() {
			this.init();
		},
		
		init : function() {
			this.render();
		},
		
		render : function() {
			$(this.el).html( this.template({title : Dico.title}) );
		}
	});
	
	var instance = null;
	
	return {
		getInstance : function() {
			if (_.isNull(instance)) {
				instance = new DefaultView;
				return instance;
			} else {
				instance.init();
				return instance;
			}
		}
	};
});
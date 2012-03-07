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
	
	render : function() {
		
		var context = this;
		
		// load views
		require(["text!application/views/default/main.html"],
			function(list) {
				context.template = _.template(list);
				
				$(context.el).html( context.template() );
				return context;
			}
		);
	}
});
var friendModel = Backbone.Model.extend({
	
	defaults : {
		'first_name'	: 'Jules',
		'last_name'		: 'Verne'
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

var friendCollection = Backbone.Collection.extend({
	model	: friendModel,
	
	initialize : function() {
		this.template = new friendView({model : this});
	},
	
	add_friend : function(first_name, last_name) {
		this.add({
			first_name : first_name,
			last_name : last_name
		});
	},
	
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

var friendView = Backbone.View.extend({
	
	el : $('#app'),
	
	events : {
		"click #add_friend"	: "add_friend",
		"click .clear"		: "clear_list"
	},
	
	template: {
		show : '',
		list : ''
	},
	
	initialize : function() {
		this.model.bind("add remove", this.render_list, this);
	},
	
	add_friend : function() {
		this.model.add_friend($('#first_name').val(), $('#last_name').val() );
	},
	
	clear_list : function() {
		this.model.clear_list();
		this.render_list();
	},
	
	render_list : function() {
		
		var context = this;
		
		// load views
		require(["text!application/views/friend/list.html"],
			function(list) {
				context.template.list = _.template(list);
				
				$(context.el).html( context.template.list({friends : context.model.models}) );
				return context;
			}
		);
	},
	
	render_detail : function() {
		return this;
	}
});
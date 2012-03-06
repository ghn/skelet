window.friendModel = Backbone.Model.extend({
	
	defaults : {
		'first_name'	: 'Jules',
		'last_name'		: 'Verne'
	},
	
	initialize : function() {
		this.bind("error", function(model, error) {
			console.log(error);
		});
	},
	
	validate : function(attrs) {
		if ((attrs.first_name == "") || (attrs.last_name == "")) {
			return "First name and last name must be set";
		}
	},
	
	full_name : function() {
		return this.get('first_name') + " " + this.get('last_name');
	}
});

window.friendCollection = Backbone.Collection.extend({
	model	: friendModel,
	
	initialize : function() {
		this.template = new friendView({model : this});
	},
	
	add_friend : function(first_name, last_name) {
		this.add({
			first_name : first_name,
			last_name : last_name
		})
	}
});

window.friendView = Backbone.View.extend({
	
	el : $('#app'),
	
	events : {
		"click #add_friend": "add_friend",
	},
	
	template: {
		show : '',
		list : ''
	},
	
	initialize : function() {
		this.model.bind("add remove", this.render_list, this);
		
		var context = this;
		
		// load views
		require(["text!views/friend/show.html", "text!views/friend/list.html"],
			function(show, list) {
				context.template.show = _.template(show);
				context.template.list = _.template(list);
				
				context.render_list();
			}
		);
	},
	
	add_friend : function() {
		this.model.add_friend($('#first_name').val(), $('#last_name').val() );
	},
	
	render_list : function() {
		$(this.el).html( this.template.list({friends : this.model.models}) );
		return this;
	},
	
	render_detail : function() {
		return this;
	}
});
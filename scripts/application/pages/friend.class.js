define([
	// Libs
	"use!backbone",
	
	// i18n
	"i18n!nls/lang",
	
	// Modules
	"modules/friend.module",
	
	// templates
	"text!templates/friend/list.html"
],

function(Backbone, Dico, Friend, friendTemplate) {
	
	var FriendView = Backbone.View.extend({
	
		el : $('#app'),
	
		events : {
			"click #add_friend"	: "add_friend",
			"click .clear"		: "clear_list"
		},
	
		template: _.template(friendTemplate),
		
		initialize : function() {
			this.init();
		},
		
		init : function() {
			this.render();
			
			Friend.bind("add remove", this.render, this);
		},
		
		render : function() {
			$(this.el).html( this.template({friends : Friend}) );
		},
		
		add_friend : function() {
			console.log("add");
			Friend.add({
				first_name	: $('#first_name').val(),
				last_name	:$('#last_name').val()
			});
		},
	
		clear_list : function() {
			Friend.clear_list();
			this.render();
		}
	});
	
	var instance = null;
	
	return {
		getInstance : function() {
			if (_.isNull(instance)) {
				instance = new FriendView;
				return instance;
			} else {
				instance.init();
				return instance;
			}
		}
	};
});
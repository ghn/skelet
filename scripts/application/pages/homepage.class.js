define([
	// Libs
	"use!backbone",
	
	// i18n
	"i18n!nls/lang",
	
	// Modules
	'modules/bar.module',
	"modules/distance.module"
],

function(Backbone, Dico, Bars, Distance) {
	
	var Homepage = Backbone.View.extend({
	
		el : $('#app'),
		
		buttons : {
			terrasse : false,
			hh : false,
			food : false
		},
		
		map : null, 		// instance of Google map
		distance : null,	// instance of Distance
		
		events : {
			'click .btn.terrasse'	: 'filterTerrasse',
			'click .btn.hh'			: 'filterHH',
			'click .btn.food'		: 'filterFood'
		},
	
		initialize : function() {
			this.init();
			this.distance = new Distance;
		},
		
		init : function() {
			var self = this;
			this.init_map();
			Bars.fetch({
				success : function() {
					self.render();
				}
			});
		},
		
		/**
		 *
		 */		
		filterTerrasse : function(el) {
			this.buttons.terrasse = ! this.buttons.terrasse;
			
			if (this.buttons.terrasse) {
				$(el.target).addClass('btn-info');
			} else {
				$(el.target).removeClass('btn-info');
			}
			
			this.render();
		},
		
		/**
		 *
		 */
		filterHH : function(el) {
			this.buttons.hh = ! this.buttons.hh;
			
			if (this.buttons.hh) {
				$(el.target).addClass('btn-info');
			} else {
				$(el.target).removeClass('btn-info');
			}
			
			this.render();
		},
		
		/**
		 *
		 */
		filterFood : function(el) {
			this.buttons.food = ! this.buttons.food;

			if (this.buttons.food) {
				$(el.target).addClass('btn-info');
			} else {
				$(el.target).removeClass('btn-info');
			}
			
			this.render();
		},
		
		/**
		 *
		 */
		render : function() {
			var tmp = $('#templateBar').html();
			var bars = Bars.filterBars(this.buttons);
			
			
			$('#lBar').html("");
			$('#lBar').append( _.template(tmp, {'bars': bars}) );
		},
		
		init_map : function() {
			var self = this;
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(positions) {
					var pos = new google.maps.LatLng(positions.coords.latitude, positions.coords.longitude);
					
					self.distance.setMyPosition({la : positions.coords.latitude, lo : positions.coords.longitude});
					console.info(self.distance.getClosestBars(Bars.filterBars(self.buttons)))
					
					var mapOptions = {
						center: pos,
						zoom: 14,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					
					self.map = new google.maps.Map($('.map')[0], mapOptions);
					
					var marker = new google.maps.Marker({
						position: pos,
						map: self.map,
						icon: '/assets/img/me.png', //'http://playground.germain.cn/tmp/n.png',
						animation: google.maps.Animation.DROP,
					});
					
					self.render_map();
				});
			}
		},
		
		/**
		 *
		 */
		render_map : function() {
			var self = this;
			
			Bars.each(function(bar) {
				var x = bar.get('position').lo;
				var y = bar.get('position').la;
				
				if (! _.isUndefined(x) && ! _.isUndefined(y)) {
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(x, y),
						map: self.map,
						icon: '/assets/img/beer.png', //'http://playground.germain.cn/tmp/n.png',
						animation: google.maps.Animation.DROP,
					});
				}
			});
		}
	});
	
	var instance = null;
	
	return {
		getInstance : function() {
			if (_.isNull(instance)) {
				instance = new Homepage;
				return instance;
			} else {
				instance.init();
				return instance;
			}
		}
	};
});
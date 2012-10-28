define([
	// Libs
	"use!backbone"
],

function(Backbone) {
	
	/** MODEL */
	var Bar = Backbone.Model.extend();
	
	/** COLLECTION */
	var Bars = Backbone.Collection.extend({
		model	: Bar,
		
		url : 'datas.json',
		
		getTerrasses : function(bars) {
			return bars.filter(function(el) {
				return el.get('terrasse');
			});
		},
		
		getFood : function(bars) {
			return bars.filter(function(el) {
				return  el.get('food');
			});
		},
		
		getHH : function(bars) {
			return bars.filter(function(el) {
				return ! _.isEmpty(el.get('hh'));
			});
		},
		
		filterBars : function(buttons) {
			var filter = this.models;
			
			if (buttons.terrasse)	filter = this.getTerrasses(filter);
			if (buttons.hh)			filter = this.getHH(filter);
			if (buttons.bouffe)		filter = this.getFood(filter);

			return filter;
		},
	});

	/** Return */
	return new Bars;
});
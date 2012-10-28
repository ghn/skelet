define([
	// Libs
	"use!backbone"
],

function(Backbone, Bars) {
	
	/** MODEL */
	var Distance = Backbone.Model.extend({
		
		defaults : {
			me : [],
		},
		
		/**
		 *
		 */
		setMyPosition : function(position) {
			this.set('me', position);
		},
		
		/**
		 *
		 */
		getClosestBars : function(Bars) {
			return Bars;
		}
	});

	/** Return */
	return Distance;
});
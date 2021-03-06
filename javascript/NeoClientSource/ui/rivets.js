﻿pemilu.ui.rivets = {}
pemilu.ui.rivets.setup = function() {

	rivets.formatters.status = {
	    read: function (value) {
	        return value == 1 ? "active" : "inactive";
	    }
	}
	
	rivets.formatters.chartClass = {
	    read: function (value) {
	        return "chart_" + value;
	    }
	}
	
	rivets.formatters.twitterhref = {
	    read: function (value) {
	        return "http://twitter.com/share?text=%23CodeForVote%20" + value;
	    }
	}
	
};



/**
 * Bind Rivets.js to individual UI elements
 *
 * Unlike normal jQuery bindings it doesn't have to be recalled if you inject new elements into the UI.
 */
pemilu.ui.rivets.bind = function () {
    view = rivets.bind($("#report-list"),{
        controller: controller
    });
};
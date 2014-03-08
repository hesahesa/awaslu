pemilu.ui.rivets = {}
pemilu.ui.rivets.setup = function() {

	rivets.formatters.status = {
	    read: function (value) {
	        return value == 1 ? "active" : "inactive";
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
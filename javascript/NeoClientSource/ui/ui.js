pemilu.ui.ready = function () {

    window.controller = new pemilu.controller();
	controller = window.controller;

    pemilu.ui.rivets.bind();
    pemilu.ui.rivets.setup();
    pemilu.ui.bind();

	controller.setReportList("{}",view);
}

/* Function to bind the element with handler */
pemilu.ui.bind = function ()
{
    $("#report-view-all").unbind("click");
	$("#report-view-all").bind("click", function(){
		controller.getReportList(view);
	});

	$("#report-view-most").unbind("click");
	$("#report-view-most").bind("click", function(){
		controller.getMostSharedReportList(view);
	});
}
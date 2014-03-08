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

pemilu.ui.buildChart = function(calegID, jsonData){
if ($("#chart_" + calegID).length > 0) {
	var chartID = 'chart_' + String(calegID);
	var bars = new Charts.BarChart(chartID, {
	  bar_width: 25
	});

	bars.add({
	  label: "foo",
	  value: 600
	});

	bars.add({
	  label: "moo",
	  value: 800,
	  options: {
		bar_color: "#53ba03"
	  }
	});

	bars.add({
	  label: "doo",
	  value: 300
	});

	bars.draw();
}

}
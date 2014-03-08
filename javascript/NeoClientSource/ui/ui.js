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
	
	$("#addReport").bind("click", function(){
		showDialogue("#dialogue");
	});
	
	$("#dialogue-overlay").bind("click", function(){
		hideDialogue("#dialogue");
	});
}

pemilu.ui.buildChart = function(calegID, stats){
var node  = document.getElementsByClassName('chart_' + calegID);
console.log(node);
console.log(stats);
if (node.length > 0) {
	
	var chart = new Charts.LineChart(node[0], {
	show_grid: true
	});
/*
	for (var i=0;i <= (stats.length - 1);i++){
			bars.add({
			  label: stats[i].label,
			  value: stats[i].value
			});
	}
	bars.draw();
	*/
	chart.add_line({
	  data: stats,
	  // line level options passed here
	  options: {
		line_color: "#00aadd",
		dot_color: "#00aadd",
		area_color: "rgba(255,255,255,0)",
		area_opacity: 0.2,
		dot_size: 5,
		line_width: 2 
	  }
	});
chart.draw();
}

}


function showDialogue(dialogue){
	$(dialogue).show();
	$("#dialogue-overlay").fadeIn();
}

function hideDialogue(dialogue){
	$(dialogue).hide();
	$("#dialogue-overlay").fadeOut();

}
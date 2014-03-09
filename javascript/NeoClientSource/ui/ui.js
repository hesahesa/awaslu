pemilu.ui.ready = function () {

    window.controller = new pemilu.controller();
	controller = window.controller;

    pemilu.ui.rivets.bind();
    pemilu.ui.rivets.setup();
    pemilu.ui.bind();
	controller.getAllReport(1,view);
}

/* Function to bind the element with handler */

$(document).ready(function(){
$('#share1').click(function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'This is the content of the "name" field.',
link: ' http://www.hyperarts.com/',
picture: 'http://www.hyperarts.com/external-xfbml/share-image.gif',
caption: 'This is the content of the "caption" field.',
description: 'This is the content of the "description" field, below the caption.',
message: ''
});
});
});

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
if (node.length > 0) {
	
	var chart = new Charts.LineChart(node[0], {
	show_grid: true,
	label_max: false,
	label_min:false,
	font_family:"Roboto"
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
	
	$("#dialogue-overlay").show();
	$(dialogue).fadeIn();
}

function hideDialogue(dialogue){
	$(dialogue).hide();
	$("#dialogue-overlay").fadeOut();

}

function getCurCoordinate() {
  if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
	return "notsupported";
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude; 
  var longitude = position.coords.longitude;
  var geo = [latitude, longitude];
  return geo;
}
pemilu.controller = function () {
    _this = this;
    this.reports = [];
    this.hasReport = false;
    this.totReport = 0;
};

pemilu.controller.prototype.getReportList = function (_view) {
	var ajaxCall = new pemilu.util.ajaxCall();
	ajaxCall.getReportList(function (response) {
		_this.setReportList(response, _view);
		//force to re-bind
		_view.bind();
	});
};

pemilu.controller.prototype.setReportList = function (data, _view) {
	//create random ukm list, later fetch it using ajax call
	for (i = 0; i < 19 ; i++) {
		var title = "sample_name" + i;
		var jsonData = [{ "report_id": i, "title": title, "pic_url": "http://stat.ks.kidsklik.com/statics/files/2014/01/13887804611655356549.gif"}];
		console.log(jsonData[0]);
		this.reports[i] = new pemilu.report(jsonData[0]);
		_view.bind();
		pemilu.ui.buildChart(i, jsonData[0]);		
	}

	
	
};

pemilu.controller.prototype.getMostSharedReportList	= function (_view) {
	var ajaxCall = new pemilu.util.ajaxCall();
	ajaxCall.getMostSharedReportList(function (response) {
		_this.setReportList(response, _view);
		//force to re-bind
		_view.bind();
	});
};


pemilu.controller = function () {
    _this = this;
    this.reports = [];
    this.hasReport = false;
    this.totReport = 0;
	this.geoLocation = null;
};

pemilu.controller.prototype.getAllReport = function (pageNum, _view) {
	var ajaxCall = new pemilu.util.ajaxCall();
	ajaxCall.getAllReport(pageNum, function (response) {
		_this.setReportList(response, _view);
		//force to re-bind
		_view.bind();
	});
};

pemilu.controller.prototype.getMostSharedReportList = function (pageNum, _view) {
	var ajaxCall = new pemilu.util.ajaxCall();
	ajaxCall.getMostSharedReportList(pageNum, function (response) {
		_this.setReportList(response, _view);
		//force to re-bind
		_view.bind();
	});
};

pemilu.controller.prototype.getReport = function (reportID, _view) {
	var ajaxCall = new pemilu.util.ajaxCall();
	ajaxCall.getReport(reportID, function (response) {
		_this.setReportList(response, _view);
		//force to re-bind
		_view.bind();
	});
};

pemilu.controller.prototype.getTotReportByCaleg = function (calegID, _view) {
	var ajaxCall = new pemilu.util.ajaxCall();
	ajaxCall.getTotReportByCaleg(calegID, function (response) {
		_this.setReportList(response, _view);
		//force to re-bind
		_view.bind();
	});
};

pemilu.controller.prototype.getTotReportByParty = function (partyID, _view) {
	var ajaxCall = new pemilu.util.ajaxCall();
	ajaxCall.getTotReportByParty(partyID, function (response) {
		_this.setReportList(response, _view);
		//force to re-bind
		_view.bind();
	});
};




pemilu.controller.prototype.setReportList = function (data, _view) {
	//create random ukm list, later fetch it using ajax call
	if (data !=null ){
		for (var i = 0; i <= (data.length -1 ) ; i++) {
			this.reports[i] = new pemilu.report(data[i]);
			_view.bind();
			var dummyStats = [[ new Date("1/1/2012"), 3], [new Date("2/1/2012"),15], [ new Date("3/1/2012"),  34],[ new Date("4/1/2012"), 10], [new Date("5/1/2012"),1], [ new Date("6/1/2012"),  4],[ new Date("7/1/2012"), 10], [new Date("8/1/2012"),1], [ new Date("9/1/2012"),  4]];
			pemilu.ui.buildChart(i, dummyStats);		
		}
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


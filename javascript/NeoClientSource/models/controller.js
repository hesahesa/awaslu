pemilu.controller = function () {
    _this = this;
    this.reports = [];
    this.hasReport = false;
    this.totReport = 0;

    this.getReportList = function (_view) {
        var ajaxCall = new pemilu.util.ajaxCall();
        ajaxCall.getReportList(function (response) {
            _this.setReportList(response, _view);
            //force to re-bind
            _view.bind();
        });
    }

    this.setReportList = function (data, _view) {
        //create random ukm list, later fetch it using ajax call
        for (i = 0; i < 19 ; i++) {
			var report_title = "sample_name" + i;
            var jsonData = [{ "report_id": i, "report_title": report_title}];
            console.log(jsonData[0]);
            this.reports[i] = new pemilu.report(jsonData[0]);
        }
		_view.bind();
    }

};
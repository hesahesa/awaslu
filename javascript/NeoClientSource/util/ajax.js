;pemilu.util.ajaxCall = function () {
	this.url = ""
};

pemilu.util.ajaxCall.prototype.getArea = function (geoLocation, callback) {
	this.url = pemilu.config.GET_AREA + "?laitude=" + geoLocation[0] + "&longitude=" + geoLocation[1] ;
	$.ajax(this.url, {
		type: "GET",
		dataType: "json"
	}).done(function (data, textStatus, jqXHR) {
		callback(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		console.log(errorThrown);
		// ADD ERROR CALLBACK
	});
};

pemilu.util.ajaxCall.prototype.getMostSharedReportList = function (pageNum, callback) {
	this.url = pemilu.config.GET_MOST_SHARED_LAPORAN + "?pagenum=" + pageNum ;
	$.ajax(this.url, {
		type: "GET",
		dataType: "json"
	}).done(function (data, textStatus, jqXHR) {
		callback(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		console.log(errorThrown);
		// ADD ERROR CALLBACK
	});
};

pemilu.util.ajaxCall.prototype.getReport = function (reportID, callback) {
	this.url = pemilu.config.GET_LAPORAN + "?laporan_id=" + reportID;
	$.ajax(this.url, {
		type: "GET",
		dataType: "json"
	}).done(function (data, textStatus, jqXHR) {
		callback(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// ADD ERROR CALLBACK
	});
};

pemilu.util.ajaxCall.prototype.getAllReport = function (areaID, pageNum, callback) {
	this.url = pemilu.config.GET_ALL_LAPORAN + "?areaID=" + areaID + "&pagenum=" +  pageNum;
	$.ajax(this.url, {
		type: "GET",
		dataType: "json"
	}).done(function (data, textStatus, jqXHR) {
		callback(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// ADD ERROR CALLBACK
	});
};


pemilu.util.ajaxCall.prototype.getTotReportByCaleg = function (calegID, callback) {
	this.url = pemilu.config.GET_NUM_LAPORAN_BY_CALEG + "?caleg_id=" +  calegID;
	$.ajax(this.url, {
		type: "GET",
		dataType: "json"
	}).done(function (data, textStatus, jqXHR) {
		callback(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// ADD ERROR CALLBACK
	});
};


pemilu.util.ajaxCall.prototype.getTotReportByParty = function (party_id, callback) {
	this.url = pemilu.config.GET_NUM_LAPORAN_BY_PARTY + "?party_id=" +  party_id;
	$.ajax(this.url, {
		type: "GET",
		dataType: "json"
	}).done(function (data, textStatus, jqXHR) {
		callback(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// ADD ERROR CALLBACK
	});
};

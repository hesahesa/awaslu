﻿;pemilu.util.ajaxCall = function () {
	this.url = ""
};

pemilu.util.ajaxCall.prototype.getArea = function (geoLocation, callback) {
	this.url = pemilu.config.GET_AREA + "&lat=" + geoLocation[0] + "&long=" + geoLocation[1] ;
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

pemilu.util.ajaxCall.prototype.getCalegDetail = function (calegID, callback) {
	this.url = pemilu.api.API_BASE_URL + "candidate/api/caleg/"+calegID+"?apiKey="+pemilu.api.API_PEMILU_KEY ;
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

pemilu.util.ajaxCall.prototype.getAllReportByAreaID = function (areaID, pageNum, callback) {
	this.url = pemilu.config.GET_ALL_LAPORAN_BY_AREA_ID + "?area_id=" + areaID + "&pagenum=" +  pageNum;
	$.ajax(this.url, {
		type: "GET",
		dataType: "json"
	}).done(function (data, textStatus, jqXHR) {
		callback(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// ADD ERROR CALLBACK
	});
};

pemilu.util.ajaxCall.prototype.getAllReport = function ( pageNum, callback) {
	this.url = pemilu.config.GET_ALL_LAPORAN + "?pagenum=" +  pageNum;
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




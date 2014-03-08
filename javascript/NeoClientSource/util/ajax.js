;pemilu.util.ajaxCall = function () {
	this.url = ""
};


pemilu.util.ajaxCall.prototype.getMostSharedReportList = function (callback) {
	this.url = pemilu.config.GET_UKM_LIST;
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

pemilu.util.ajaxCall.prototype.getReportList = function (ukm_id, callback) {
	this.url = pemilu.config.GET_UKM_MEMBER_LIST + "?ukm_id=" + ukm_id;
	$.ajax(this.url, {
		type: "GET",
		dataType: "json"
	}).done(function (data, textStatus, jqXHR) {
		callback(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// ADD ERROR CALLBACK
	});
};

pemilu.util.ajaxCall.prototype.getCalegInfo = function (caleg_id, callback) {
	this.url = pemilu.config.GET_UKM_BBMK_PARTICIPANT_LIST + "?ukm_id=" + ukm_id + "&" + param + "=" + value;
	$.ajax(this.url, {
		type: "GET",
		dataType: "json"
	}).done(function (data, textStatus, jqXHR) {
		callback(data);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// ADD ERROR CALLBACK
	});
};
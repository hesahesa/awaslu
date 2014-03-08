;pemilu.util.ajaxCall = function () {

    this.getUKMList = function (callback) {
        var url = pemilu.config.GET_UKM_LIST;
        $.ajax(url, {
            type: "GET",
            dataType: "json"
        }).done(function (data, textStatus, jqXHR) {
            callback(data);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            // ADD ERROR CALLBACK
        });
    }

    this.getUKMMemberList = function (ukm_id, callback) {
        var url = pemilu.config.GET_UKM_MEMBER_LIST + "?ukm_id=" + ukm_id;
        $.ajax(url, {
            type: "GET",
            dataType: "json"
        }).done(function (data, textStatus, jqXHR) {
            callback(data);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            // ADD ERROR CALLBACK
        });
    }

    this.getUKMBBBMKParticipantList = function (ukm_id, callback) {
        var url = pemilu.config.GET_UKM_BBMK_PARTICIPANT_LIST + "?ukm_id=" + ukm_id + "&" + param + "=" + value;
        console.log(url);
        $.ajax(url, {
            type: "GET",
            dataType: "json"
        }).done(function (data, textStatus, jqXHR) {
            callback(data);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            // ADD ERROR CALLBACK
        });
    }

};
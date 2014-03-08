bbmk.controllerUKM = function () {
    _this = this;
    this.ukm_list = [];
    this.hasMember = false;
    this.hasBBMKParticipant = false;
    this.totMember = 0;
    this.totBBMKParticipant = 0;

    this.getUkmList = function (_view) {
        var ajaxCall = new bbmk.util.ajaxCall();
        ajaxCall.getUKMList(function (response) {
            _this.setUKMList(response, _view);
            //force to re-bind
            _view.bind();
        });
    }

    this.setUKMList = function (data, _view) {
        //create random ukm list, later fetch it using ajax call
        for (i = 0; i < 19 ; i++) {
			var ukm_name = "sample_name" + i;
            var jsonData = [{ "ukm_id": i, "ukm_name": ukm_name, "ukm_desc": "desc" + i, "ukm_status": i % 2 }];
            console.log(jsonData[0]);
            this.ukm_list[i] = new bbmk.ukm(jsonData[0]);
        }
		_view.bind();
    }

};
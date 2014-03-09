pemilu.report = function (obj) {
	__this = this;
    this.id = obj.id;
    this.title = obj.title;
    this.picture_url = obj.picture_url;
	this.description = obj.description;
	this.date = obj.date;
	this.caleg_id = obj.caleg_id_API;
	this.latitude = obj.latitude;
	this.longitude = obj.longitude;
	this.party_id = obj.party_id_API;
	this.user_id = obj.user_id;
	this.sharecounter = obj.sharecounter;
	this.caleg = [];

};
pemilu.localStorage = function () {

    this.reset = function (callback) {
        localStorage.clear();
        callback();
    }

    this.getHelper = function (key) {
        return (typeof (localStorage[key]) !== "undefined") ? localStorage[key] : null;
    }

    this.setHelper = function (key, value){
        localStorage[key] = value;
    }

};
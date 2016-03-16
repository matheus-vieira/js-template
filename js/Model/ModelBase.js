function ModelBase(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});
    
    mSelf.Visible = checkValue(o.Visible, true);

    mSelf.request = new AjaxRequest();

    Object.assign(mSelf, p);
}

function AjaxRequest() {
    var timeout = (function (callback) {
        return window.setTimeout(function () {
            callback();
        }, 1000);
    });
    this.get = function (url, callback) {
        timeout(callback);
    };
    this.post = function (url, data, callback) {
        timeout(callback);
    };
    this.delete = function (url, data, callback) {
        timeout(callback);
    };
}
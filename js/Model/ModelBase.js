/**
 * Base model for object creation
 * @param {object} p An object with the properties
 */
function ModelBase(p) {
  "use strict";
  var mSelf = this,
    o = valueOrDefault(p, {});

  mSelf.Visible = valueOrDefault(o.Visible, true);

  mSelf.request = new AjaxRequest();

  Object.assign(mSelf, p);
}

class AjaxRequest {
  constructor() {
    var timeout = function (callback) {
      return window.setTimeout(function () {
        callback();
      }, 1000);
    };
    this.get = function (url, callback) {
      timeout(callback);
    };
    this.post = function (url, data, callback) {
      timeout(() => callback(data));
    };
    this.delete = function (url, data, callback) {
      timeout(callback);
    };
  }
}

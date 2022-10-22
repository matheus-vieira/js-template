/**
 * Class to work with url parameters
 * @example
 * const urlParams = new UrlParams("my-page?i=2");
 * // to access the i query param use:
 * urlParams.params.i;
 * urlParams.params["i"]
 */
function UrlParams(pageName) {
  "use strict";
  var self = this;
  self.params = [];

  if (pageName) {
    getUrlParams(pageName);
  }

  function getUrlParams(pageName) {
    var params = [],
      pathName = "";

    if (pageName.substring(0, 1) !== "/") {
      pageName = "/" + pageName;
    }

    if (pageName.substring(pageName.length - 1) !== "/") {
      pageName = pageName + "/";
    }

    pathName = document.location.pathname.toLowerCase();
    pageName = pageName.toLowerCase();

    self.params = (function (a) {
      if (a === "") {
        return {};
      }
      var b = {};
      for (var i = 0; i < a.length; ++i) {
        var p = a[i].split("=");
        if (p.length != 2) {
          continue;
        }
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
      }
      return b;
    })(window.location.search.substr(1).split("&"));

    if (!self.params) {
      params = pathName.replace(pageName, "");
      self.params = params.split("/");
    }
  }
}

FcvModel.prototype.filterBy = function (strFilter, propToFilter) {
    var regex;
    try {
        regex = new RegExp(strFilter,"gi");
        return regex.test(this[propToFilter]);
    } catch (e) {
        return false;
    }
};
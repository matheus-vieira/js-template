FcvModel.prototype.filtrar = function (strFilter) {
    var regex;
    try {
        regex = new RegExp(strFilter,"gi");
        return regex.test(this.Descricao);
    } catch (e) {
        return false;
    }
};
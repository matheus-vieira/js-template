(function (w, d) {
    "use strict";
    var fcvList = [],
        tplFcv = d.getTemplate("tpl-fcv"),
        holder = d.getElementById("fcvs"),
        txtDescFilter = d.getElementById("txtDescFilter");

    function render() {
        var parsedTpl = "",
            descFilter = "";

        if (txtDescFilter && txtDescFilter.value) {
            descFilter = txtDescFilter.value;
        }

        fcvList.forEach(function (ltj) {
            if (ltj.filterBy(descFilter, 'Description')) {
                parsedTpl += tplFcv.supplant(ltj);
            }
        });

        holder.innerHTML = parsedTpl;
    }

    function init() {
        var i,
            model;
        for (i = 1; i < 1001; i++) {
            model = new FcvModel({
                Id: i,
                Name: "Descricao " + i,
                Line: "L" + i,
                Table: "T" + i,
                Journey: "J" + i
            });
            fcvList.push(model);
        }
    }

    w.onload = function onLoad() {
        init();
        render();
    };
}(window, document));
(function (w, d) {
    "use strict";
    var fcvList = [],
        tplFcv = null,
        holder = null,
        btnFilter = null,
        txtDescFilter = null;

    function getDomElements() {
        tplFcv = d.getTemplate("tpl-fcv");
        holder = d.getElementById("fcvs");
        btnFilter = d.getElementById("btnFilter");
        txtDescFilter = d.getElementById("txtDescFilter");
    }

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
            data,
            model;
        for (i = 1; i < 100001; i++) {
            data = {};
            data.Id = i;
            data.Name = "Descricao " + i;
            data.Line = "L" + i;
            data.Table = "T" + i;

            // Simulate missing properties
            if (i % 10) data.Journey = "J" + i;

            model = new FcvModel(data);
            fcvList.push(model);
        }

        btnFilter.addEventListener("click", function (evt) {
            render();
        }, false);
    }

    w.onload = function onLoad() {
        getDomElements();
        init();
        render();
    };
}(window, document));

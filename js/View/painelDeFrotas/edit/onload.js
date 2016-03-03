(function (w, d) {
    "use strict";
    var vehicles = [],
        fcv = null,
        holder = d.getElementById("edit"),
        tplFcv = d.getTemplate("tpl-fcv"),
        tplVehicle = d.getTemplate("tpl-vehicle");

    function render() {
        var lista = "";

        vehicles.forEach(function (vehicle) {
            lista += tplVehicle.supplant(vehicle);
        });
        
        tplFcv = tplFcv.supplant(fcv);
        tplFcv = tplFcv.supplant({ selectVehicles: lista });
        
        holder.innerHTML = tplFcv;
    }

    function init() {
        var i = 0,
            vehicle = null,
            pageParams = new EditUrlParams();

        fcv = new FcvModel({
            Id: pageParams.fcvId,
            Name: "Descricao " + pageParams.fcvId,
            Line: "L" + pageParams.fcvId,
            Table: "T" + pageParams.fcvId,
            Journey: "J" + pageParams.fcvId
        });
        
        for (i = 1; i < 1001; i++) {
            vehicle = new VehicleModel({
                Id: i,
                Identifier: i + "" + (i * 3)
            });
            vehicles.push(vehicle);
        }
    }

    w.onload = function onLoad() {
        init();
        render();
    };
}(window, document));
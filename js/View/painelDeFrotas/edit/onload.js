(function (w, d) {
    "use strict";
    var vehicles = [],
        fcv = null,
        holder = null,
        tplFcv = null,
        tplVehicle = null;

    function getDomElements() {
        holder = d.getElementById("edit");
        tplFcv = d.getTemplate("tpl-fcv");
        tplVehicle = d.getTemplate("tpl-vehicle");
    }

    function render() {
        var lista = "",
            btnSubmit = null,
            drpVehicles = null;

        vehicles.forEach(function (vehicle) {
            lista += tplVehicle.supplant(vehicle);
        });

        tplFcv = tplFcv.supplant(
            // create a new object based on fcv
            // with another property
            Object.create(fcv, {
                selectVehicles: { value: lista }
            })
        );
        
        holder.innerHTML = tplFcv;

        drpVehicles = d.getElementById("drpVehicles");

        btnSubmit = d.getElementById("btnSubmit");
        btnSubmit.addEventListener("click", function (evt) {
            fcv.changeVehicle(+drpVehicles.value);
        }, false);
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
        console.log("Original fcv object:", JSON.stringify(fcv));

        for (i = 1; i < 1001; i++) {
            vehicle = new VehicleModel({
                Id: i,
                Identifier: i + "" + (i * 3)
            });
            vehicles.push(vehicle);
        }
    }

    w.onload = function onLoad() {
        getDomElements();
        init();
        render();
    };
}(window, document));
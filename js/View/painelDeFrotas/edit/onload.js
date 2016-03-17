(function (w, d) {
    "use strict";
    var vehicles = [],
        fcv = null,
        btnSubmit = null,
        tplVehicle = null,
        holderFcvDesc = null,
        holderdrpVehicles = null;

    function getDomElements() {
        btnSubmit = d.getElementById("btnSubmit");

        tplVehicle = d.getTemplate("tpl-vehicle");

        holderFcvDesc = d.getElementById("spnFcvDesc");
        holderdrpVehicles = d.getElementById("drpVehicles");
    }

    function render() {
        var tplList = "";

        holderFcvDesc.innerHTML = fcv.Description;

        vehicles.forEach(function (vehicle) {
            tplList += tplVehicle.supplant(vehicle);
        });

        drpVehicles.innerHTML += tplList;
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

        btnSubmit.addEventListener("click", function (evt) {
            fcv.changeVehicle(+drpVehicles.value);
        }, false);
    }

    w.onload = function onLoad() {
        getDomElements();
        init();
        render();
    };
}(window, document));
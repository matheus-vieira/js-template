FcvModel.prototype.changeVehicle = function (vehicleId) {
    if (vehicleId > 0) {
        this.request.post("/", Object.create(this, {
            VehicleId: { value: vehicleId }
        }), function () {
           console.log("Request successful!")
        });

        console.log(" Changed fcv object:", JSON.stringify(this));
    }
};
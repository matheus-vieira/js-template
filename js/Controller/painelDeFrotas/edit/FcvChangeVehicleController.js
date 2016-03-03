FcvModel.prototype.changeVehicle = function (vehicleId) {
    this.VehicleId = vehicleId;
    console.log(" Changed fcv object:", JSON.stringify(this));
};
FcvModel.prototype.changeVehicle = function (vehicleId) {
    if (vehicleId > 0) {
    	this.VehicleId = vehicleId;
    	console.log(" Changed fcv object:", JSON.stringify(this));
    }
};
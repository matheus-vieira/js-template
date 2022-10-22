// This is a function only used on a specific page
// The idea here is to have a lightweight object
// And append functions/properties only when necessary
// This is the reason to append through prototype
// Instead of a function in the object itself
/**
 * Change the vehicle from the FCV
 * @param {integer} vehicleId The vehicle identifier
 */
FcvModel.prototype.changeVehicle = function (vehicleId) {
  if (vehicleId < 1) return;

  console.log("Before change vehicle on fcv object:", JSON.stringify(this));

  this.request.post("/", { VehicleId: vehicleId }, (requestData) => {
    this.VehicleId = requestData.VehicleId;
    console.log("Request successful!");
    console.log("After change vehicle on fcv object:", JSON.stringify(this));
  });
};

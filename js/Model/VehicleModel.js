/**
 * Represent an vehicle Object
 * @param {object} p The properties to create the object
 */
function VehicleModel(p) {
  "use strict";
  var mSelf = this,
    o = valueOrDefault(p, {});

  // inherit instance properties
  ModelBase.call(mSelf, o);
}

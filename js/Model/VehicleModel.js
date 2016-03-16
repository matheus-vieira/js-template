function VehicleModel(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});

    // inherit instance properties
    ModelBase.call(mSelf, o);
}
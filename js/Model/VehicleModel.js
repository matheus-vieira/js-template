function VehicleModel(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});

    // inherit instance properties
    ModelBase.apply( this, arguments );

    mSelf.Id = checkValue(o.Id, -1);
    mSelf.Identifier = checkValue(o.Identifier, "");
}
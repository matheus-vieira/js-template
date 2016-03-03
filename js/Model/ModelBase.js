function ModelBase(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});
    
    mSelf.Visible = checkValue(o.Visible, "");
}
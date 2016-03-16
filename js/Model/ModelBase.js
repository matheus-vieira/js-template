function ModelBase(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});
    
    mSelf.Visible = checkValue(o.Visible, "");

    for (var prop in o) {
        if(p.hasOwnProperty(prop)) {
            mSelf[prop] = checkValue(p[prop], "");
        }
    }
}
function ModelBase(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});
    
    mSelf.Visible = checkValue(o.Visible, "");

    mSelf.applyTemplate = function (tpl) {
        var prop = null,
            regex = null;

        if (!tpl || tpl.length === 0) {
            return "";
        }

        for (prop in mSelf) {
            if (mSelf.hasOwnProperty(prop)) {
                regex = new RegExp("{" + prop + "}","g");
                tpl = tpl.replace(regex, checkValue(mSelf[prop], " "));
            }
        }

        return tpl;
    };
}
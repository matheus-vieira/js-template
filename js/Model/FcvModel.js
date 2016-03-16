function FcvModel(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});

    // inherit instance properties
    ModelBase.call(mSelf, o);

    Object.defineProperty(mSelf, 'Description', {
        get: function() {
            var builder = [];

            // properties that aren't required
            mSelf.Line && builder.push(mSelf.Line);
            mSelf.Table && builder.push(mSelf.Table);
            mSelf.Journey && builder.push(mSelf.Journey);

            return builder.join(" / ") + " — " + mSelf.Name;
        }
    });
}
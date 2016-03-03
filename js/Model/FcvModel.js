function FcvModel(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});

    // inherit instance properties
    ModelBase.apply(this, o);

    mSelf.Id = checkValue(o.Id, -1);

    mSelf.Name = checkValue(o.Name, "");
    mSelf.Line = checkValue(o.Line, "");
    mSelf.Table = checkValue(o.Table, "");
    mSelf.Journey = checkValue(o.Journey, "");

    Object.defineProperty(mSelf, 'Description', {
        get: function() {
            return [
                this.Line,
                this.Table,
                this.Journey
            ].join(" / ") + " - " + this.Name;
        }
    });
}
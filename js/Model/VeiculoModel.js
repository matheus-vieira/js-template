function VeiculoModel(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});

    // inherit instance properties
    ModelBase.apply( this, arguments );

    mSelf.Codigo = checkValue(o.Codigo, -1);
    mSelf.Identificador = checkValue(o.Identificador, "");
}
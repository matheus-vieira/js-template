function FcvModel(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});

    // inherit instance properties
    ModelBase.apply(this, o);

    mSelf.Codigo = checkValue(o.Codigo, -1);

    mSelf.Nome = checkValue(o.Nome, "");
    mSelf.Linha = checkValue(o.Linha, "");
    mSelf.Tabela = checkValue(o.Tabela, "");
    mSelf.Jornada = checkValue(o.Jornada, "");

    Object.defineProperty(mSelf, 'Descricao', {
        enumerable: true,
        get: function() {
            return [
                this.Linha,
                this.Tabela,
                this.Jornada
            ].join(" / ")
            + " - " + this.Nome;
        }
    });
}
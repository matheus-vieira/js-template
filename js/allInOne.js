function checkValue(o, d) {
    "use strict";
    return o || d;
}

function getTemplate(id) {
    "use strict";
    var ret = "";
    ret = document.getElementById(id);
    if (ret) {
        ret = ret.innerHTML;
    } else {
        ret = "";
    }
    return ret;
}

function ModelBase() {
    "use strict";
    var mSelf = this;

    mSelf.applyTemplate = function (t) {
        var tpl = t,
            prop = null;

        for (prop in mSelf) {
            tpl = tpl.replace("{" + prop + "}", checkValue(mSelf[prop], "&nbsp;"));
        }

        return tpl;
    };
}

function FcvModel(p) {
    "use strict";
    var mSelf = this,
        o = checkValue(p, {});

    ModelBase.apply(mSelf, {});

    mSelf.Codigo = checkValue(o.Codigo, -1);
    mSelf.Descricao = checkValue(o.Descricao, "");
}

window.onload = OnLoad;

function OnLoad() {
    "use strict";
    var tpl = getTemplate("linha-fcv"),
        linhas = "",
        aux = null,
        table = document.getElementById("fcvs"),
        i = 0;

    for (i = 0; i < 100; i++) {
        aux = new FcvModel({
            Codigo: i,
            Descricao: "L" + i + " / " + "T" + i + " / " + "J" + i + " -  Descricao " + i
        });

        linhas +=  aux.applyTemplate(tpl);
    }
    table.innerHTML = linhas;
};
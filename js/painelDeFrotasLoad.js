var linhasTabelasJornadas = [];

function renderLinhas() {
    "use strict";
    var tpl = getTemplate("linha-fcv"),
        holder = document.getElementById("fcvs"),
        linhas = "",
        x = null,
        filtro = "",
        txtFiltrar = document.getElementById("txtFiltrar");

    if (txtFiltrar && txtFiltrar.value) {
        filtro = txtFiltrar.value;
    }

    linhasTabelasJornadas.forEach(function (ltj) {
        if (ltj.filtrar(filtro)) {
            linhas += ltj.applyTemplate(tpl);
        }
    });

    holder.innerHTML = linhas;
}

function init() {
    "use strict";
    var i,
        model;
    for (i = 1; i < 1001; i++) {
        model = new FcvModel({
            Codigo: i,
            Nome: "Descricao " + i,
            Linha: "L" + i,
            Tabela: "T" + i,
            Jornada: "J" + i
        })
        linhasTabelasJornadas.push(model);
    }
}

function onLoad() {
    "use strict";
    init();
    renderLinhas();
}

window.onload = onLoad;
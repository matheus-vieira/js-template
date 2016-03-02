var linhasTabelasJornada = null,
    veiculos = [];

function render() {
    "use strict";
    var tplLinha = getTemplate("fcv"),
        tplVeiculo = getTemplate("veiculo"),
        holder = document.getElementById("edit"),
        lista = "",
        x = null,
        filtro = "",
        txtFiltrar = document.getElementById("txtFiltrar");

    if (txtFiltrar && txtFiltrar.value) {
        filtro = txtFiltrar.value;
    }
    for (x in veiculos) {
        lista += veiculos[x].applyTemplate(tplVeiculo);
    }
    
    tplLinha = linhasTabelasJornada.applyTemplate(tplLinha);
    tplLinha = tplLinha.replace(/{selectVeiculos}/g, lista);
    
    holder.innerHTML = tplLinha;
}

function onLoad() {
    "use strict";
    init();
    render();
}

function init() {
    "use strict";
    var i = 0,
        pageParams = new EditParams();

    linhasTabelasJornada = new FcvModel();
    linhasTabelasJornada.Codigo = pageParams.codigoLTJ;
    linhasTabelasJornada.Descricao = "L" + pageParams.codigoLTJ;
    linhasTabelasJornada.Descricao += " / " + "T" + pageParams.codigoLTJ;
    linhasTabelasJornada.Descricao += " / " + "J" + pageParams.codigoLTJ;
    linhasTabelasJornada.Descricao += " -  Descricao " + pageParams.codigoLTJ;
    
    for (i = 1; i < 1001; i++) {
        veiculos.push(new VeiculoModel({
            Codigo: i,
            Identificador: i + "" + (i * 3)
        }));
    }
}

window.onload = onLoad;
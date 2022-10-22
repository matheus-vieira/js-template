(function (w, d) {
  "use strict";
  let fcvList = [],
    tplFcv = null,
    holder = null,
    btnFilter = null,
    txtDescFilter = null;

  function getDomElements() {
    tplFcv = d.getTemplate("tpl-fcv");
    holder = d.getElementById("fcvs");
    btnFilter = d.getElementById("btnFilter");
    txtDescFilter = d.getElementById("txtDescFilter");
  }

  function render() {
    let parsedTpl = "",
      descFilter = "";

    if (txtDescFilter && txtDescFilter.value) {
      descFilter = txtDescFilter.value;
    }

    fcvList.forEach(function (ltj) {
      const matchFilter = ltj.filterBy(descFilter, "Description");
      if (matchFilter) {
        parsedTpl += tplFcv.supplant(ltj);
      }
    });

    holder.innerHTML = parsedTpl;
  }

  function init() {
    for (let i = 1; i < 1001; i++) {
      let data = {};
      data.Id = i;
      data.Name = "Descrição " + i;
      data.Line = "L" + i;
      data.Table = "T" + i;

      // Simulate missing properties
      if (Math.random() >= 0.5) data.Journey = "J" + i;

      let model = new FcvModel(data);
      fcvList.push(model);
    }

    btnFilter.addEventListener(
      "click",
      function (evt) {
        render();
        return false;
      },
      false
    );
  }

  w.onload = function onLoad() {
    getDomElements();
    init();
    render();
  };
})(window, document);

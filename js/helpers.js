function checkValue(o, d) {
    "use strict";
    return o || d;
}

function getTemplate(id) {
    "use strict";
    var elem = document.getElementById(id);
    if (elem) {
        return elem.innerHTML;
    }
    return "";
}
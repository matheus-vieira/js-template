/**
 * Get the string value of an element.
 * If the element exists return the innerHTML value
 * If does not has a element return an empty string
 * @param {string} id The html element identifier
 * @returns string
 */
document.getTemplate = function getTemplate(id) {
    "use strict";
    var elem = document.getElementById(id);
    if (elem) {
        return elem.innerHTML;
    }
    return "";
};